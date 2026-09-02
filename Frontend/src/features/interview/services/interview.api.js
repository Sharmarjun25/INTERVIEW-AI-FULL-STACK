import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
    withCredentials: true,
})

/**
 * @description Service to generate interview report based on user self on user self description , resume and job description
 */

export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {
    const formData = new FormData()
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription || "")
    // Only append resume if it's a real File object
    if (resumeFile instanceof File) {
        formData.append("resume", resumeFile)
    }

    // Do NOT manually set Content-Type — Axios sets it automatically
    // with the correct multipart boundary when FormData is used
    const response = await api.post("/api/interview/", formData)

    return response.data;
}

/**
 * @description Service to get interview report by interviewId
 */

export const getInterviewReportById = async (interviewId) => {
    const response = await api.get(`/api/interview/report/${interviewId}`)

    return response.data
}


/**
 * @description Service to get all  reports of logged in user
 */

export const getAllInterviewReports = async () => {
    const response = await api.get("/api/interview")

    return response.data
}

/**
 * @description Download an AI-optimised resume PDF for a given interview report.
 *              Triggers a browser file-save dialog automatically.
 */
export const downloadOptimizedResume = async (interviewId) => {
    const response = await api.post(
        `/api/resume/generate/${interviewId}`,
        {},
        { responseType: 'blob' }
    );

    // Extract filename from Content-Disposition header (fallback to generic name)
    const disposition = response.headers['content-disposition'] || '';
    const match = disposition.match(/filename="(.+?)"/);
    const filename = match ? match[1] : 'optimized_resume.pdf';

    // Trigger browser download
    const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
};

/**
 * @description Download the raw LaTeX (.tex) source for the optimised resume.
 */
export const downloadLatexSource = async (interviewId) => {
    const response = await api.post(
        `/api/resume/generate/${interviewId}?format=tex`,
        {},
        { responseType: 'blob' }
    );

    const disposition = response.headers['content-disposition'] || '';
    const match = disposition.match(/filename="(.+?)"/);
    const filename = match ? match[1] : 'resume.tex';

    const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/x-tex' }));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
};
