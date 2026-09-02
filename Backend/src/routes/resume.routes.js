const express = require('express');
const authMiddleware = require('../middleware/auth.middleware');
const { generateResumeController } = require('../controllers/resume.controller');

const resumeRouter = express.Router();

/**
 * @route  POST /api/resume/generate/:interviewId
 * @desc   Generate an AI-optimized resume from an existing interview report.
 *         Returns PDF by default; add ?format=tex for the raw LaTeX source.
 * @access Private
 */
resumeRouter.post(
    '/generate/:interviewId',
    authMiddleware.authUser,
    generateResumeController
);

module.exports = resumeRouter;
