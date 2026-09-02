const interviewReportModel = require('../models/InterviewReport.model');
const { generateOptimizedResume } = require('../services/ai.service');
const { generateLatexSource, generatePdfBuffer } = require('../services/resumeGenerator.service');

/**
 * POST /api/resume/generate/:interviewId
 *
 * Fetches the report, calls Gemini to produce optimized resume JSON,
 * builds PDF (primary) + LaTeX source, then responds with the PDF download.
 */
async function generateResumeController(req, res) {
    try {
        const { interviewId } = req.params;
        const { format } = req.query; // ?format=tex to get raw LaTeX

        // ── 1. Fetch the report (owner-guarded) ──────────────────
        const report = await interviewReportModel.findOne({
            _id: interviewId,
            user: req.user.id
        });

        if (!report) {
            return res.status(404).json({ message: 'Interview report not found.' });
        }

        // ── 2. Generate structured resume JSON via Gemini ─────────
        const resumeData = await generateOptimizedResume({
            resume: report.resume || '',
            jobDescription: report.jobDescription,
            selfDescription: report.selfDescription || '',
            skillGaps: report.skillGaps || [],
            title: report.title
        });

        // ── 3. Return raw LaTeX if requested ──────────────────────
        if (format === 'tex') {
            const latexSource = generateLatexSource(resumeData);
            const safeName = (resumeData.name || 'resume').replace(/[^a-zA-Z0-9_-]/g, '_');
            res.setHeader('Content-Type', 'application/x-tex');
            res.setHeader('Content-Disposition', `attachment; filename="${safeName}_resume.tex"`);
            return res.send(latexSource);
        }

        // ── 4. Build PDF ──────────────────────────────────────────
        const pdfBuffer = await generatePdfBuffer(resumeData);
        const safeName = (resumeData.name || 'resume').replace(/[^a-zA-Z0-9_-]/g, '_');

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${safeName}_optimized_resume.pdf"`);
        res.setHeader('Content-Length', pdfBuffer.length);
        return res.send(pdfBuffer);

    } catch (error) {
        console.error('generateResumeController error:', error.message);
        res.status(500).json({
            message: 'Failed to generate resume. Please try again.',
            error: error.message
        });
    }
}

module.exports = { generateResumeController };
