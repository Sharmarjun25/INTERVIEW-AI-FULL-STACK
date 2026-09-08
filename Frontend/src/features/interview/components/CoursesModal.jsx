import React, { useEffect, useRef } from 'react';
import { getCoursesForSkill, getPlatformColor, PLATFORM_ICONS } from '../utils/courseMapper.js';

const CoursesModal = ({ skill, onClose }) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        if (!skill) return;
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [skill, onClose]);

    if (!skill) return null;

    const courses = getCoursesForSkill(skill.skill);
    const isMyCaptain = courses.length > 0 && courses[0].platform === 'mycaptain';

    const severityColor = {
        high: '#ff4d4d',
        medium: '#f5a623',
        low: '#3fb950',
    }[skill.severity] || '#ff2d78';

    const severityBg = {
        high: 'rgba(255,77,77,0.12)',
        medium: 'rgba(245,166,35,0.12)',
        low: 'rgba(63,185,80,0.12)',
    }[skill.severity] || 'rgba(255,45,120,0.12)';

    const handleOverlayClick = (e) => {
        if (e.target === overlayRef.current) onClose();
    };

    return (
        <div
            ref={overlayRef}
            className="courses-modal-overlay"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <div className="courses-modal">
                <div className="courses-modal__header">
                    <div className="courses-modal__title-row">
                        <div className="courses-modal__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c3 3 9 3 12 0v-5" />
                            </svg>
                        </div>
                        <div>
                            <p className="courses-modal__subtitle">
                                {isMyCaptain ? 'MyCaptain Courses for Skill Gap' : 'Free Courses for Skill Gap'}
                            </p>
                            <h2 className="courses-modal__title">{skill.skill}</h2>
                        </div>
                        <span
                            className="courses-modal__severity-badge"
                            style={{
                                color: severityColor,
                                background: severityBg,
                                border: '1px solid ' + severityColor + '40'
                            }}
                        >
                            {skill.severity} priority
                        </span>
                    </div>
                    <button className="courses-modal__close" onClick={onClose} aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <p className="courses-modal__description">
                    Close this skill gap with MyCaptain's live, mentor-led cohort courses.
                </p>

                <div className="courses-modal__list">
                    {courses.map((course, i) => {
                        const platformColor = getPlatformColor(course.platform);
                        const platformIcon = PLATFORM_ICONS[course.platform] || '🚀';
                        return (
                            <a
                                key={i}
                                href={course.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="course-card"
                                style={{ '--platform-color': platformColor }}
                            >
                                <div className="course-card__accent" />
                                <div className="course-card__body">
                                    <div className="course-card__top">
                                        <span
                                            className="course-card__platform"
                                            style={{
                                                color: platformColor,
                                                background: platformColor + '18',
                                                border: '1px solid ' + platformColor + '35'
                                            }}
                                        >
                                            <span className="course-card__platform-icon">{platformIcon}</span>
                                            MyCaptain
                                        </span>
                                        <span className="course-card__arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7 7 17 7 17 17" />
                                            </svg>
                                        </span>
                                    </div>
                                    <h3 className="course-card__title">{course.title}</h3>
                                    <div className="course-card__meta">
                                        <span className="course-card__meta-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            {course.duration}
                                        </span>
                                        <span className="course-card__meta-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M2 20h.01M7 20v-4" />
                                                <path d="M12 20v-8" />
                                                <path d="M17 20V8" />
                                                <path d="M22 4v16" />
                                            </svg>
                                            {course.level}
                                        </span>
                                        <span className="course-card__free-badge">
                                            {course.platform === 'mycaptain' ? 'LIVE' : 'FREE'}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                <p className="courses-modal__footer-note">
                    {isMyCaptain
                        ? 'Click any card to enroll on MyCaptain — live cohort courses with real mentors.'
                        : 'Click any card to open the course in a new tab. All resources are 100% free.'}
                </p>
            </div>
        </div>
    );
};

export default CoursesModal;