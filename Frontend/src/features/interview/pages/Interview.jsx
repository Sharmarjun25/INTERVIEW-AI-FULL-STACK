import React, { useState } from 'react'
import '../style/interview.scss'
import { useInterview } from '../hooks/useInterview.js'
import { useNavigate, useParams } from 'react-router'
import { useAuth } from '../../auth/hooks/useAuth.js'
import CoursesModal from '../components/CoursesModal.jsx'
import { downloadOptimizedResume, downloadLatexSource } from '../services/interview.api.js'


const NAV_ITEMS = [
    { id: 'technical', label: 'Technical Questions', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>) },
    { id: 'behavioral', label: 'Behavioral Questions', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>) },
    { id: 'roadmap', label: 'Road Map', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>) }


]

const QuestionCard = ({ item, index }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className='q-card'>
            <div className='q-card__header' onClick={() => setOpen(o => !o)}>
                <span className='q-card__index'>Q{index + 1}</span>
                <p className='q-card__question'>{item.question}</p>
                <span className={`q-card__chevron ${open ? 'q-card__chevron--open' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </span>
            </div>
            {open && (
                <div className='q-card__body'>
                    <div className='q-card__section'>
                        <span className='q-card__tag q-card__tag--intention'>Intention</span>
                        <p>{item.intention}</p>
                    </div>
                    <div className='q-card__section'>
                        <span className='q-card__tag q-card__tag--answer'>Model Answer</span>
                        <p>{item.answer}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

const RoadMapDay = ({ day }) => (
    <div className='roadmap-day'>
        <div className='roadmap-day__header'>
            <span className='roadmap-day__badge'>Day {day.day}</span>
            <h3 className='roadmap-day__focus'>{day.focus}</h3>
        </div>
        <ul className='roadmap-day__tasks'>
            {day.tasks.map((task, i) => (
                <li key={i}>
                    <span className='roadmap-day__bullet' />
                    {task}
                </li>
            ))}
        </ul>
    </div>
)

const Interview = () => {
    const [activeNav, setActiveNav] = useState('technical')
    const [selectedSkill, setSelectedSkill] = useState(null)
    const [resumeLoading, setResumeLoading] = useState(false)
    const [resumeError, setResumeError] = useState(null)
    const { report, loading } = useInterview()
    const { interviewId } = useParams()

    // to logout function

    const navigate = useNavigate()
    const { handleLogout } = useAuth()

    const handleLogoutClick = async () => {
        await handleLogout();
        navigate('/login');
    }

    const handleDownloadPdf = async () => {
        setResumeLoading(true);
        setResumeError(null);
        try {
            await downloadOptimizedResume(interviewId);
        } catch (err) {
            setResumeError('Failed to generate resume. Please try again.');
        } finally {
            setResumeLoading(false);
        }
    };

    const handleDownloadTex = async () => {
        setResumeLoading(true);
        setResumeError(null);
        try {
            await downloadLatexSource(interviewId);
        } catch (err) {
            setResumeError('Failed to generate LaTeX source.');
        } finally {
            setResumeLoading(false);
        }
    };
    /*
        useEffect(() => {
            if (interviewId) {
                getReportById(interviewId)
            }
    
        }, [interviewId])*/

    if (loading || !report) {
        return (
            <main className='loading-screen'>
                <h1>Downloading your own customized resume...</h1>
            </main>
        )
    }

    const scoreColor =
        report.matchScore >= 80 ? 'score--high' :
            report.matchScore >= 60 ? 'score--mid' : 'score--low'


    return (
        <div className='interview-page'>
            <div className='interview-layout'>

                <nav className='interview-nav'>
                    <div className='nav-content'>
                        <p className='interview-nav__label'>Sections</p>
                        {NAV_ITEMS.map(item => (
                            <button
                                key={item.id}
                                className={`interview-nav__item ${activeNav === item.id ? 'interview-nav__item--active' : ''}`}
                                onClick={() => setActiveNav(item.id)}
                            >
                                <span className='interview-nav__icon'>{item.icon}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Resume Download Panel */}
                    <div className='resume-download-panel'>
                        <p className='resume-download-panel__label'>Optimized Resume</p>
                        <p className='resume-download-panel__hint'>AI-tailored to the job description with skill gaps addressed.</p>

                        <button
                            id='download-pdf-btn'
                            className='resume-download-btn resume-download-btn--primary'
                            onClick={handleDownloadPdf}
                            disabled={resumeLoading}
                        >
                            {resumeLoading ? (
                                <>
                                    <span className='resume-download-btn__spinner' />
                                    Generating...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                                    Download PDF
                                </>
                            )}
                        </button>

                        <button
                            id='download-tex-btn'
                            className='resume-download-btn resume-download-btn--secondary'
                            onClick={handleDownloadTex}
                            disabled={resumeLoading}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                            Download .tex
                        </button>

                        {resumeError && (
                            <p className='resume-download-panel__error'>{resumeError}</p>
                        )}
                    </div>

                </nav>
                <div className='interview-divider' />

                <main className='interview-content'>
                    {activeNav === 'technical' && (
                        <section>
                            <div className='content-header'>
                                <h2>Technical Questions</h2>
                                <span className='content-header_count'>{report.technicalQuestions?.length ?? 0} Questions</span>


                            </div>
                            <div className='q-list'>
                                {report.technicalQuestions?.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}

                            </div>
                        </section>
                    )}

                    {activeNav === 'behavioral' && (
                        <section>
                            <div className='content-header'>
                                <h2>Behavioral Questions</h2>
                                <span className='content-header_count'>{report.behavioralQuestions?.length ?? 0} Questions</span>


                            </div>
                            <div className='q-list'>
                                {report.behavioralQuestions?.map((q, i) => (
                                    <QuestionCard key={i} item={q} index={i} />
                                ))}

                            </div>
                        </section>
                    )}

                    {activeNav === 'roadmap' && (
                        <section>
                            <div className='content-header'>
                                <h2>Preparation Road Map</h2>
                                <span className='content-header_count'>{report.preparationPlan?.length ?? 0}-day plan</span>


                            </div>
                            <div className='roadmap-list'>
                                {report.preparationPlan?.map((q) => (
                                    <RoadMapDay key={q.day} day={q} />
                                ))}

                            </div>
                        </section>
                    )}
                </main>

                <div className='interview-divider' />

                <aside className='interview-sidebar'>
                    <div className='match-score'>
                        <p className='match-score__label'>Match Score</p>
                        <div className={`match-score__ring ${scoreColor}`}>
                            <span className='match-score__value'>{report.matchScore}</span>
                            <span className='match-score__pct'>%</span>
                        </div>
                        <p className={`match-score__sub ${scoreColor}`}>
                            {report.matchScore >= 80 ? 'Strong match for this role' :
                                report.matchScore >= 60 ? 'Average match for this role' : 'Weak match for this role'}
                        </p>
                    </div>

                    <div className='sidebar-divider' />

                    <div className='skill-gaps'>
                        <p className='skill-gaps__label'>Skill Gaps</p>
                        <p className='skill-gaps__hint'>Click a skill to find free courses</p>
                        <div className='skill-gaps__list'>
                            {report.skillGaps?.map((gap, i) => (
                                <button
                                    key={i}
                                    className={`skill-tag skill-tag--${gap.severity} skill-tag--clickable`}
                                    onClick={() => setSelectedSkill(gap)}
                                    title={`Find free courses for ${gap.skill}`}
                                >
                                    {gap.skill}
                                    <span className='skill-tag__link-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>

            <button className='button primary-button logout-btn' onClick={handleLogoutClick}>Logout</button>

            <CoursesModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />

        </div>
    )
}

export default Interview 