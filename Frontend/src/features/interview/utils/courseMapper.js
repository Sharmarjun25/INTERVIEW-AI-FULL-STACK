/**
 * courseMapper.js
 * Maps a skill keyword to a curated list of free courses.
 * Courses are sourced from YouTube, Coursera (free audit), freeCodeCamp, MDN, and official docs.
 */

export const PLATFORM_ICONS = {
    youtube: '▶',
    coursera: '🎓',
    freecodecamp: '🔥',
    mdn: '📘',
    official: '⭐',
    mit: '🏛️',
};

const CATALOG = {
    javascript: [
        { title: 'JavaScript Full Course for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg', duration: '3.5h', level: 'Beginner' },
        { title: 'JavaScript Algorithms and Data Structures - freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/', duration: '300h', level: 'Beginner-Advanced' },
        { title: 'JavaScript Tutorial - MDN Web Docs', platform: 'mdn', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript', duration: 'Self-paced', level: 'All levels' },
        { title: 'Programming with JavaScript - Meta (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/programming-with-javascript', duration: '26h', level: 'Beginner' },
    ],
    typescript: [
        { title: 'TypeScript Full Course for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=30LWjhZzg50', duration: '8h', level: 'Beginner' },
        { title: 'TypeScript Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=BCg4U1FzODs', duration: '1.5h', level: 'Beginner' },
        { title: 'TypeScript Official Docs Handbook', platform: 'official', url: 'https://www.typescriptlang.org/docs/handbook/intro.html', duration: 'Self-paced', level: 'All levels' },
    ],
    react: [
        { title: 'React Full Course 2024 - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=x4rFhThSX04', duration: '8h', level: 'Beginner' },
        { title: 'Meta Front-End Developer Certificate (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/professional-certificates/meta-front-end-developer', duration: '7 months', level: 'Beginner' },
        { title: 'React Official Tutorial', platform: 'official', url: 'https://react.dev/learn', duration: 'Self-paced', level: 'All levels' },
    ],
    nodejs: [
        { title: 'Node.js Full Course - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=f2EqECiTBL8', duration: '8h', level: 'Beginner' },
        { title: 'Back End Development and APIs - freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/', duration: '300h', level: 'Intermediate' },
        { title: 'Node.js Official Documentation', platform: 'official', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs', duration: 'Self-paced', level: 'All levels' },
    ],
    python: [
        { title: 'Python for Everybody - University of Michigan (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/specializations/python', duration: '8 months', level: 'Beginner' },
        { title: 'Python Full Course for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw', duration: '4.5h', level: 'Beginner' },
        { title: 'Scientific Computing with Python - freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', duration: '300h', level: 'Intermediate' },
    ],
    'data structures': [
        { title: 'Data Structures and Algorithms - MIT OpenCourseWare', platform: 'mit', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/', duration: 'Self-paced', level: 'Intermediate' },
        { title: 'Data Structures Easy to Advanced Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM', duration: '8h', level: 'All levels' },
        { title: 'Algorithms Part I - Princeton (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/algorithms-part1', duration: '54h', level: 'Intermediate' },
    ],
    algorithms: [
        { title: 'Algorithms - Princeton Part I (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/algorithms-part1', duration: '54h', level: 'Intermediate' },
        { title: 'Algorithms and Data Structures Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=8hly31xKli0', duration: '9h', level: 'Intermediate' },
        { title: 'MIT 6.006 Introduction to Algorithms', platform: 'mit', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/', duration: 'Self-paced', level: 'Advanced' },
    ],
    'system design': [
        { title: 'System Design Interview Crash Course - Gaurav Sen', platform: 'youtube', url: 'https://www.youtube.com/watch?v=xpDnVSmNFX0', duration: '1h', level: 'Intermediate' },
        { title: 'System Design for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=UzLMhqg3_Wc', duration: '2h', level: 'Advanced' },
        { title: 'System Design Primer - GitHub', platform: 'official', url: 'https://github.com/donnemartin/system-design-primer', duration: 'Self-paced', level: 'Intermediate-Advanced' },
    ],
    sql: [
        { title: 'SQL Tutorial - Full Database Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', duration: '4h', level: 'Beginner' },
        { title: 'Databases and SQL for Data Science - IBM (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/sql-data-science', duration: '20h', level: 'Beginner' },
        { title: 'Relational Database - freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/relational-database/', duration: '300h', level: 'Beginner' },
    ],
    database: [
        { title: 'SQL Tutorial - Full Database Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', duration: '4h', level: 'Beginner' },
        { title: 'CMU Database Systems (15-445)', platform: 'youtube', url: 'https://www.youtube.com/playlist?list=PLSE8ODhjZXjbj8BMuIrRcacnQh20hmY9g', duration: 'Self-paced', level: 'Advanced' },
        { title: 'Stanford Databases: Advanced Topics in SQL', platform: 'coursera', url: 'https://www.coursera.org/learn/sql-data-science', duration: 'Self-paced', level: 'Intermediate' },
    ],
    git: [
        { title: 'Git and GitHub Crash Course - Traversy Media', platform: 'youtube', url: 'https://www.youtube.com/watch?v=SWYqp7iY_Tc', duration: '32min', level: 'Beginner' },
        { title: 'Git Tutorial for Beginners - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=8JJ101D3knE', duration: '1h', level: 'Beginner' },
        { title: 'Version Control with Git - Atlassian Tutorials', platform: 'official', url: 'https://www.atlassian.com/git/tutorials', duration: 'Self-paced', level: 'All levels' },
    ],
    docker: [
        { title: 'Docker Tutorial for Beginners - TechWorld with Nana', platform: 'youtube', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE', duration: '3h', level: 'Beginner' },
        { title: 'Docker and Kubernetes Full Course - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=Wf2eSG3owoA', duration: '4h', level: 'Intermediate' },
        { title: 'Docker Official Get Started Guide', platform: 'official', url: 'https://docs.docker.com/get-started/', duration: 'Self-paced', level: 'Beginner' },
    ],
    kubernetes: [
        { title: 'Kubernetes Tutorial for Beginners - TechWorld with Nana', platform: 'youtube', url: 'https://www.youtube.com/watch?v=X48VuDVv0do', duration: '4h', level: 'Beginner' },
        { title: 'Kubernetes Full Course - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=d6WC5n9G_sM', duration: '3h', level: 'Intermediate' },
    ],
    'machine learning': [
        { title: 'Machine Learning Specialization - Andrew Ng (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/specializations/machine-learning-introduction', duration: '3 months', level: 'Beginner' },
        { title: 'Machine Learning Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=NWONeJKn6kc', duration: '10h', level: 'Intermediate' },
        { title: 'Machine Learning with Python - freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/machine-learning-with-python/', duration: '300h', level: 'Intermediate' },
    ],
    'deep learning': [
        { title: 'Deep Learning Specialization - Andrew Ng (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/specializations/deep-learning', duration: '5 months', level: 'Intermediate' },
        { title: 'Neural Networks: Zero to Hero - Andrej Karpathy', platform: 'youtube', url: 'https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ', duration: '10h+', level: 'Advanced' },
    ],
    'natural language processing': [
        { title: 'NLP with Python - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=X2vAabgKiuM', duration: '2h', level: 'Intermediate' },
        { title: 'NLP Specialization - deeplearning.ai (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/specializations/natural-language-processing', duration: '4 months', level: 'Advanced' },
    ],
    aws: [
        { title: 'AWS Certified Cloud Practitioner - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=SOTamWNgDKc', duration: '13h', level: 'Beginner' },
        { title: 'AWS Cloud Practitioner Essentials (free)', platform: 'official', url: 'https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/', duration: '6h', level: 'Beginner' },
    ],
    azure: [
        { title: 'Microsoft Azure Fundamentals - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=NKEFWyqJ5XA', duration: '3h', level: 'Beginner' },
        { title: 'AZ-900 Azure Fundamentals - Microsoft Learn', platform: 'official', url: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/', duration: 'Self-paced', level: 'Beginner' },
    ],
    gcp: [
        { title: 'Google Cloud Fundamentals - Google (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/gcp-fundamentals', duration: '8h', level: 'Beginner' },
    ],
    css: [
        { title: 'CSS Full Course for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc', duration: '11h', level: 'Beginner' },
        { title: 'Responsive Web Design - freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', duration: '300h', level: 'Beginner' },
        { title: 'CSS - MDN Web Docs', platform: 'mdn', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS', duration: 'Self-paced', level: 'All levels' },
    ],
    'rest api': [
        { title: 'REST API Best Practices - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=7nm1pYuKAhY', duration: '2h', level: 'Intermediate' },
        { title: 'APIs for Beginners - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=GZvSYJDk-us', duration: '2h', level: 'Beginner' },
    ],
    communication: [
        { title: 'Successful Negotiation - University of Michigan (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/negotiation-skills', duration: '17h', level: 'All levels' },
        { title: 'Teamwork and Collaboration Skills - Coursera', platform: 'coursera', url: 'https://www.coursera.org/learn/communication-engineering', duration: '12h', level: 'Beginner' },
    ],
    leadership: [
        { title: 'Inspiring and Motivating Individuals - Coursera', platform: 'coursera', url: 'https://www.coursera.org/learn/motivating-people', duration: '17h', level: 'Intermediate' },
    ],
    'problem solving': [
        { title: 'Problem Solving with Algorithms - MIT', platform: 'mit', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/', duration: 'Self-paced', level: 'Intermediate' },
        { title: 'Critical Thinking and Problem Solving - Coursera', platform: 'coursera', url: 'https://www.coursera.org/learn/critical-thinking-problem-solving', duration: '15h', level: 'Beginner' },
    ],
    agile: [
        { title: 'Agile with Atlassian Jira - Atlassian (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/agile-atlassian-jira', duration: '17h', level: 'Beginner' },
        { title: 'Agile Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=Z9QbYZh1YXY', duration: '30min', level: 'Beginner' },
    ],
    testing: [
        { title: 'JavaScript Testing Introduction Tutorial', platform: 'youtube', url: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI', duration: '1h', level: 'Beginner' },
        { title: 'Software Testing Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=sO8eGL6SFsA', duration: '8h', level: 'Beginner' },
    ],
    graphql: [
        { title: 'GraphQL Full Course - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=ed8SzALpx1Q', duration: '4h', level: 'Intermediate' },
        { title: 'GraphQL Official Tutorial', platform: 'official', url: 'https://graphql.org/learn/', duration: 'Self-paced', level: 'Intermediate' },
    ],
    mongodb: [
        { title: 'MongoDB Crash Course - Traversy Media', platform: 'youtube', url: 'https://www.youtube.com/watch?v=-56x56UppqQ', duration: '1.5h', level: 'Beginner' },
        { title: 'MongoDB University (free)', platform: 'official', url: 'https://learn.mongodb.com/', duration: 'Self-paced', level: 'All levels' },
    ],
    'ci/cd': [
        { title: 'CI/CD with GitHub Actions - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI', duration: '2h', level: 'Intermediate' },
        { title: 'DevOps CI/CD Pipeline Explained', platform: 'youtube', url: 'https://www.youtube.com/watch?v=scEDHsr3APg', duration: '1h', level: 'Beginner' },
    ],
    devops: [
        { title: 'DevOps Prerequisites Course - freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=Wvf0mBNGjXY', duration: '3h', level: 'Beginner' },
        { title: 'Docker and Kubernetes Complete Guide', platform: 'youtube', url: 'https://www.youtube.com/watch?v=Wf2eSG3owoA', duration: '4h', level: 'Intermediate' },
    ],
    linux: [
        { title: 'Linux Command Line Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=iwolPf6kN-k', duration: '5h', level: 'Beginner' },
        { title: 'Introduction to Linux - The Linux Foundation (edX)', platform: 'official', url: 'https://www.edx.org/learn/linux/the-linux-foundation-introduction-to-linux', duration: '60h', level: 'Beginner' },
    ],
};

export function getPlatformColor(platform) {
    const colors = {
        youtube: '#ff0000',
        coursera: '#0056d2',
        freecodecamp: '#006400',
        mdn: '#1d4ed8',
        official: '#7c3aed',
        mit: '#8b0000',
        udemy: '#a435f0',
    };
    return colors[platform] || '#6b7280';
}

export function getCoursesForSkill(skill) {
    const normalised = skill.toLowerCase().trim();

    if (CATALOG[normalised]) return CATALOG[normalised];

    for (const [key, courses] of Object.entries(CATALOG)) {
        if (normalised.includes(key) || key.includes(normalised)) {
            return courses;
        }
    }

    const encoded = encodeURIComponent(skill);
    return [
        {
            title: 'Search "' + skill + '" on YouTube',
            platform: 'youtube',
            url: 'https://www.youtube.com/results?search_query=' + encoded + '+free+course+tutorial',
            duration: 'Various',
            level: 'All levels',
        },
        {
            title: 'Search "' + skill + '" on Coursera (free audit)',
            platform: 'coursera',
            url: 'https://www.coursera.org/search?query=' + encoded + '&price=Free',
            duration: 'Various',
            level: 'All levels',
        },
        {
            title: 'Search "' + skill + '" on freeCodeCamp',
            platform: 'freecodecamp',
            url: 'https://www.freecodecamp.org/news/search/?query=' + encoded,
            duration: 'Various',
            level: 'All levels',
        },
    ];
}