const { zodToJsonSchema } = require("zod-to-json-schema");

const { GoogleGenAI } = require("@google/genai");
const { z } = require('zod');



const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

async function invokeGeminiAi(prompt = "Hello gemini ! Explain what is Interview ?") {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        })
        console.log(response.text)
        return response.text;
    } catch (err) {
        console.error("Gemini API error:", err.message)
    }
}

const interviewReportSchema = z.object({
    matchScore: z.number().describe("A score between 0 to 100 indicating how well the candidate's profile matches the job description"),

    technicalQuestions: z.array(z.object({
        question: z.string().describe("The technical question that can be asked in the Interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover")
    })).describe("Technical Questions that can be asked in the interview along with the intention"),

    behavioralQuestions: z.array(z.object({
        question: z.string().describe("The behavioral question that can be asked in the Interview"),
        intention: z.string().describe("The intention of interviewer behind asking this question"),
        answer: z.string().describe("How to answer this question, what points to cover")
    })).describe("Behavioral Questions that can be asked in the interview along with the intention"),

    skillGaps: z.array(z.object({
        skill: z.string().describe("The skill which the candidate is lacking"),
        severity: z.enum(["low", "medium", "high"]).describe("The severity of the skill gap")
    })).describe("Skill gaps that the candidate has"),

    preparationPlan: z.array(z.object({
        day: z.number().describe("The day number in the plan, starting from 1"),
        focus: z.string().describe("The main focus of this day in the preparation plan"),
        tasks: z.array(z.string()).describe("List of tasks to be done on this day")
    })).describe("A day-wise preparation plan for the candidate to follow in order"),

    title: z.string().describe("the title of the job for which the interview report is generated"),
})


/**
 * Removes fields from a JSON Schema that Gemini API does not support.
 * zodToJsonSchema adds "$schema" and "additionalProperties: false" which
 * cause Gemini to return a 400 Bad Request error.
 */
function cleanSchemaForGemini(schema) {
    if (typeof schema !== "object" || schema === null) return schema;

    const cleaned = {};
    for (const [key, value] of Object.entries(schema)) {
        // Skip fields Gemini doesn't support
        if (key === "$schema" || key === "additionalProperties") continue;
        if (typeof value === "object" && !Array.isArray(value)) {
            cleaned[key] = cleanSchemaForGemini(value);
        } else if (Array.isArray(value)) {
            cleaned[key] = value.map(item => cleanSchemaForGemini(item));
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
}

async function generateInterviewReport({ resume, selfdescription, jobdescription }) {

    const prompt = `Generate an interview report for a candidate with the following details :
    Resume : ${resume}
    SelfDescription : ${selfdescription}
    JobDescription : ${jobdescription}`

    try {
        // Clean the schema — Gemini rejects $schema and additionalProperties:false
        const rawSchema = zodToJsonSchema(interviewReportSchema);
        const geminiSchema = cleanSchemaForGemini(rawSchema);

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: geminiSchema
            }
        })

        // Extract JSON — Gemini may wrap it in markdown code fences
        let rawText = response.text.trim();
        if (rawText.startsWith("```")) {
            rawText = rawText.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
        }

        const result = JSON.parse(rawText)
        return result;

    } catch (err) {
        console.error("generateInterviewReport error:", err.message);
        throw err; // re-throw so the controller's catch block handles it
    }
}


const optimizedResumeSchema = z.object({
    name: z.string().describe("Full name of the candidate extracted from the resume"),
    email: z.string().describe("Email address of the candidate"),
    phone: z.string().describe("Phone number of the candidate"),
    linkedin: z.string().optional().describe("LinkedIn profile URL if available"),
    github: z.string().optional().describe("GitHub profile URL if available"),
    summary: z.string().describe("A 2-3 sentence ATS-optimized professional summary tailored to the job description"),
    skills: z.array(z.string()).describe("Technical and soft skills, prioritizing those matching the job description. Include skill gap areas as actively developing."),
    experience: z.array(z.object({
        company: z.string().describe("Company or organization name"),
        role: z.string().describe("Job title"),
        duration: z.string().describe("e.g. Jan 2022 - Present"),
        location: z.string().optional().describe("City, Country or Remote"),
        bullets: z.array(z.string()).describe("3-5 achievement-oriented bullet points with action verbs and quantifiable results")
    })).describe("Work experience in reverse chronological order"),
    education: z.array(z.object({
        institution: z.string(),
        degree: z.string(),
        year: z.string(),
        gpa: z.string().optional()
    })),
    projects: z.array(z.object({
        name: z.string(),
        description: z.string().describe("One impactful sentence describing the project"),
        technologies: z.array(z.string()),
        link: z.string().optional()
    })).optional().describe("Relevant projects to highlight")
});


/**
 * Generates an optimized, ATS-tailored structured resume JSON from stored report data.
 * @param {{ resume: string, jobDescription: string, selfDescription: string, skillGaps: Array, title: string }} reportData
 */
async function generateOptimizedResume({ resume, jobDescription, selfDescription, skillGaps, title }) {
    const skillGapList = (skillGaps || [])
        .map(g => `${g.skill} (${g.severity} priority)`)
        .join(', ');

    const prompt = `You are an expert resume writer and ATS optimization specialist.
Generate a complete optimized resume for a candidate applying for: "${title}".
Extract all personal details (name, email, phone, linkedin, github) directly from the original resume text.

--- ORIGINAL RESUME ---
${resume || 'No resume uploaded. Use the self-description only.'}

--- SELF DESCRIPTION ---
${selfDescription || 'Not provided.'}

--- TARGET JOB DESCRIPTION ---
${jobDescription}

--- SKILL GAPS TO ADDRESS ---
${skillGapList || 'None identified.'}

Rules:
1. Extract contact details from the original resume text - do not fabricate them.
2. Write a 2-3 sentence summary tailored to the job.
3. List skills matching the job first; include skill gap areas as "actively developing".
4. Rewrite experience bullets using STAR format with action verbs.
5. Do NOT invent companies, degrees, or dates not present in the original data.
6. Return structured JSON only.`;

    try {
        const rawSchema = zodToJsonSchema(optimizedResumeSchema);
        const geminiSchema = cleanSchemaForGemini(rawSchema);

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: geminiSchema
            }
        });

        let rawText = response.text.trim();
        if (rawText.startsWith("```")) {
            rawText = rawText.replace(/^```(?:json)?\s*/i, "").replace(/```\s*$/, "").trim();
        }

        return JSON.parse(rawText);
    } catch (err) {
        console.error("generateOptimizedResume error:", err.message);
        throw err;
    }
}


module.exports = { generateInterviewReport, generateOptimizedResume };