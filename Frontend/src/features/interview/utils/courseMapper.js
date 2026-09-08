export const PLATFORM_ICONS = {
    mycaptain: '🚀',
    youtube: '▶',
    freecodecamp: '🔥',
    coursera: '🎓',
    mdn: '📘',
    official: '⭐',
};

const MYCAPTAIN_BASE = 'https://www.mycaptain.in';

// ── Primary catalog: MyCaptain live cohort-based courses ──────────────────────
const MYCAPTAIN_CATALOG = {
    javascript: [
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Full Stack Coder Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/full-stack-coder-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    typescript: [
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    react: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Coder Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/full-stack-coder-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    nodejs: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    python: [
        { title: 'Python Programming', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/python-programming`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Data Science Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/data-science-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    'data structures': [
        { title: 'Python Programming', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/python-programming`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Coder Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/full-stack-coder-certification-course`, duration: '1 Month', level: 'Beginner' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    algorithms: [
        { title: 'Python Programming', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/python-programming`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Full Stack Coder Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/full-stack-coder-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    'system design': [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    sql: [
        { title: 'SQL', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/sql-course`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Data Science Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/data-science-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    database: [
        { title: 'SQL', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/sql-course`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    mongodb: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
    ],
    git: [
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    docker: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    kubernetes: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    'machine learning': [
        { title: 'Artificial Intelligence', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/artificial-intelligence`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Data Science Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/data-science-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    'deep learning': [
        { title: 'Artificial Intelligence', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/artificial-intelligence`, duration: 'Cohort-based', level: 'Advanced' },
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    'natural language processing': [
        { title: 'Artificial Intelligence', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/artificial-intelligence`, duration: 'Cohort-based', level: 'Advanced' },
        { title: 'Generative AI for Productivity', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/generative-ai`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    'generative ai': [
        { title: 'Generative AI for Productivity', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/generative-ai`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Artificial Intelligence', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/artificial-intelligence`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    aws: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    azure: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    gcp: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    css: [
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'UI & UX Design', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/ui-ux-design`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Coder Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/full-stack-coder-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    'rest api': [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Web Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/web-development`, duration: 'Cohort-based', level: 'Beginner' },
    ],
    graphql: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    communication: [
        { title: 'Business Communication', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/business-communication`, duration: 'Cohort-based', level: 'All levels' },
        { title: 'Entrepreneurship', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/entrepreneurship`, duration: 'Cohort-based', level: 'All levels' },
    ],
    leadership: [
        { title: 'Entrepreneurship', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/entrepreneurship`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Business Communication', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/business-communication`, duration: 'Cohort-based', level: 'All levels' },
        { title: 'MBA Aspirant Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/mba-aspirant-launchpad`, duration: '1 Month', level: 'Intermediate' },
    ],
    'problem solving': [
        { title: 'Python Programming', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/python-programming`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Business Analytics', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/business-analytics`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    agile: [
        { title: 'Product Management Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/product-management-certification-course`, duration: '1 Month', level: 'Intermediate' },
        { title: 'Entrepreneurship', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/entrepreneurship`, duration: 'Cohort-based', level: 'All levels' },
    ],
    testing: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    'ci/cd': [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    devops: [
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Tech Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/tech-certification-course`, duration: '1 Month', level: 'Intermediate' },
    ],
    linux: [
        { title: 'Ethical Hacking', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/ethical-hacking`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    'ui/ux': [
        { title: 'UI & UX Design', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/ui-ux-design`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Graphic Design', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/graphic-design`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Creators Kickstarter Pack', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/creative-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
    design: [
        { title: 'UI & UX Design', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/ui-ux-design`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Graphic Design', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/graphic-design`, duration: 'Cohort-based', level: 'Beginner' },
    ],
    'digital marketing': [
        { title: 'Digital Marketing', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/digital-marketing`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Digital Marketing Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/digital-marketing-certification-course`, duration: '1 Month', level: 'Beginner' },
        { title: 'Search Engine Optimization', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/search-engine-optimization`, duration: 'Cohort-based', level: 'Beginner' },
    ],
    seo: [
        { title: 'Search Engine Optimization', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/search-engine-optimization`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Digital Marketing', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/digital-marketing`, duration: 'Cohort-based', level: 'Beginner' },
    ],
    android: [
        { title: 'Android App Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/android-app-development`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Full Stack Development', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/full-stack-development`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    'data science': [
        { title: 'Data Analytics With Python', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/data-analytics-with-python`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Data Science Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/data-science-certification-course`, duration: '1 Month', level: 'Beginner' },
        { title: 'Artificial Intelligence', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/artificial-intelligence`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    excel: [
        { title: 'Excel and Advanced Excel', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/excel-and-advanced-excel-course`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Business Analytics', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/business-analytics`, duration: 'Cohort-based', level: 'Intermediate' },
    ],
    finance: [
        { title: 'Stock Market and Finance', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/stock-market-and-finance`, duration: 'Cohort-based', level: 'Beginner' },
        { title: 'Financial Modelling', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/financial-modelling`, duration: 'Cohort-based', level: 'Intermediate' },
        { title: 'Financial Analyst Launchpad', platform: 'mycaptain', url: `${MYCAPTAIN_BASE}/kickstarter/financial-analyst-certification-course`, duration: '1 Month', level: 'Beginner' },
    ],
};

// ── Fallback catalog: popular free courses when no MyCaptain match exists ──────
const FREE_CATALOG = {
    redis: [
        { title: 'Redis Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ', duration: '1h', level: 'Beginner' },
        { title: 'Redis University (free)', platform: 'official', url: 'https://university.redis.io/', duration: 'Self-paced', level: 'All levels' },
    ],
    caching: [
        { title: 'Redis Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=jgpVdJB2sKQ', duration: '1h', level: 'Beginner' },
        { title: 'System Design: Caching', platform: 'youtube', url: 'https://www.youtube.com/watch?v=dGAgxozNWFE', duration: '30min', level: 'Intermediate' },
    ],
    microservices: [
        { title: 'Microservices with Node.js & React — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=nH4qjmP2KEE', duration: '7h', level: 'Advanced' },
        { title: 'Microservices Architecture — IBM (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/introduction-to-microservices', duration: '5h', level: 'Intermediate' },
    ],
    kafka: [
        { title: 'Apache Kafka Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=R873BlNVUB4', duration: '2h', level: 'Intermediate' },
        { title: 'Kafka Tutorial — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=SqVfCyfCJqw', duration: '2.5h', level: 'Beginner' },
    ],
    terraform: [
        { title: 'Terraform Course for Beginners — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo', duration: '2.5h', level: 'Beginner' },
        { title: 'Terraform Official Tutorials', platform: 'official', url: 'https://developer.hashicorp.com/terraform/tutorials', duration: 'Self-paced', level: 'All levels' },
    ],
    ansible: [
        { title: 'Ansible Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=bs8fKN_tKKY', duration: '2h', level: 'Beginner' },
        { title: 'Red Hat Ansible Essentials (free)', platform: 'official', url: 'https://www.redhat.com/en/services/training/do007-ansible-essentials-simplicity-automation-technical-overview', duration: 'Self-paced', level: 'Beginner' },
    ],
    jenkins: [
        { title: 'Jenkins Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=7KCS70sCoK0', duration: '3h', level: 'Beginner' },
        { title: 'CI/CD with GitHub Actions — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI', duration: '2h', level: 'Intermediate' },
    ],
    nginx: [
        { title: 'NGINX Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=7VAI73roXaY', duration: '1.5h', level: 'Beginner' },
        { title: 'NGINX Official Docs', platform: 'official', url: 'https://nginx.org/en/docs/beginners_guide.html', duration: 'Self-paced', level: 'Beginner' },
    ],
    postgresql: [
        { title: 'PostgreSQL Full Tutorial', platform: 'youtube', url: 'https://www.youtube.com/watch?v=qw--VYLpxG4', duration: '4h', level: 'Beginner' },
        { title: 'Relational Databases — freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/relational-database/', duration: '300h', level: 'Beginner' },
    ],
    mysql: [
        { title: 'MySQL Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', duration: '4h', level: 'Beginner' },
        { title: 'Relational Databases — freeCodeCamp', platform: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/relational-database/', duration: '300h', level: 'Beginner' },
    ],
    flutter: [
        { title: 'Flutter Course for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=VPvVD8t02U8', duration: '10h', level: 'Beginner' },
        { title: 'Flutter Official Codelabs', platform: 'official', url: 'https://docs.flutter.dev/codelabs', duration: 'Self-paced', level: 'All levels' },
    ],
    swift: [
        { title: 'Swift Programming Tutorial', platform: 'youtube', url: 'https://www.youtube.com/watch?v=CwA1VWP0Ldw', duration: '4h', level: 'Beginner' },
        { title: 'Swift Official Documentation', platform: 'official', url: 'https://docs.swift.org/swift-book/', duration: 'Self-paced', level: 'All levels' },
    ],
    kotlin: [
        { title: 'Kotlin for Android Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=F9UC9DY-vIU', duration: '5h', level: 'Beginner' },
        { title: 'Kotlin Official Docs', platform: 'official', url: 'https://kotlinlang.org/docs/getting-started.html', duration: 'Self-paced', level: 'All levels' },
    ],
    vue: [
        { title: 'Vue.js Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=qZXt1Aom3Cs', duration: '2h', level: 'Beginner' },
        { title: 'Vue.js Official Tutorial', platform: 'official', url: 'https://vuejs.org/tutorial/', duration: 'Self-paced', level: 'All levels' },
    ],
    angular: [
        { title: 'Angular Crash Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=3qBXWUpoPHo', duration: '2h', level: 'Beginner' },
        { title: 'Angular Official Tutorial', platform: 'official', url: 'https://angular.io/tutorial', duration: 'Self-paced', level: 'All levels' },
    ],
    'next.js': [
        { title: 'Next.js 14 Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=ZjAqacIC_3c', duration: '5h', level: 'Intermediate' },
        { title: 'Next.js Official Docs', platform: 'official', url: 'https://nextjs.org/learn', duration: 'Self-paced', level: 'All levels' },
    ],
    nextjs: [
        { title: 'Next.js 14 Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=ZjAqacIC_3c', duration: '5h', level: 'Intermediate' },
        { title: 'Next.js Official Docs', platform: 'official', url: 'https://nextjs.org/learn', duration: 'Self-paced', level: 'All levels' },
    ],
    'spring boot': [
        { title: 'Spring Boot Tutorial — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=9SGDpanrc8U', duration: '3h', level: 'Intermediate' },
        { title: 'Spring Official Guides', platform: 'official', url: 'https://spring.io/guides', duration: 'Self-paced', level: 'All levels' },
    ],
    java: [
        { title: 'Java Full Course — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=GoXwIVyNvX0', duration: '9h', level: 'Beginner' },
        { title: 'Object Oriented Programming in Java — Coursera', platform: 'coursera', url: 'https://www.coursera.org/specializations/object-oriented-programming', duration: '5 months', level: 'Beginner' },
    ],
    golang: [
        { title: 'Go Programming Language Tutorial', platform: 'youtube', url: 'https://www.youtube.com/watch?v=un6ZyFkqFKo', duration: '7h', level: 'Beginner' },
        { title: 'Go Official Tour', platform: 'official', url: 'https://go.dev/tour/', duration: 'Self-paced', level: 'All levels' },
    ],
    rust: [
        { title: 'Rust Programming — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=BpPEoZW5IiY', duration: '14h', level: 'Intermediate' },
        { title: 'The Rust Book (free)', platform: 'official', url: 'https://doc.rust-lang.org/book/', duration: 'Self-paced', level: 'All levels' },
    ],
    hadoop: [
        { title: 'Hadoop Tutorial for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=MfF750YVDxM', duration: '2h', level: 'Beginner' },
    ],
    spark: [
        { title: 'Apache Spark Tutorial', platform: 'youtube', url: 'https://www.youtube.com/watch?v=S2MUhGA3lEw', duration: '3h', level: 'Intermediate' },
    ],
    tableau: [
        { title: 'Tableau for Beginners', platform: 'youtube', url: 'https://www.youtube.com/watch?v=TPMlZxRRaBQ', duration: '4h', level: 'Beginner' },
        { title: 'Tableau Free Training Videos', platform: 'official', url: 'https://www.tableau.com/learn/training', duration: 'Self-paced', level: 'All levels' },
    ],
    'power bi': [
        { title: 'Power BI Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=TmhQCQr_ATc', duration: '3h', level: 'Beginner' },
        { title: 'Microsoft Power BI Learning', platform: 'official', url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi', duration: 'Self-paced', level: 'All levels' },
    ],
    figma: [
        { title: 'Figma Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=HZuk6Wkx_Eg', duration: '3h', level: 'Beginner' },
        { title: 'Figma Official Tutorials', platform: 'official', url: 'https://help.figma.com/hc/en-us/categories/360002051613-Get-Started', duration: 'Self-paced', level: 'All levels' },
    ],
    'web3': [
        { title: 'Web3 Blockchain Full Course — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ', duration: '32h', level: 'Intermediate' },
    ],
    blockchain: [
        { title: 'Blockchain Full Course — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ', duration: '32h', level: 'Intermediate' },
        { title: 'Bitcoin and Cryptocurrency Technologies — Princeton (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/cryptocurrency', duration: '23h', level: 'Intermediate' },
    ],
    'computer networking': [
        { title: 'Computer Networking Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw', duration: '9h', level: 'Beginner' },
    ],
    networking: [
        { title: 'Computer Networking Full Course', platform: 'youtube', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw', duration: '9h', level: 'Beginner' },
        { title: 'The Bits and Bytes of Computer Networking — Google (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/learn/computer-networking', duration: '35h', level: 'Beginner' },
    ],
    'operating systems': [
        { title: 'Operating Systems: 3 Easy Pieces (free book)', platform: 'official', url: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', duration: 'Self-paced', level: 'Intermediate' },
    ],
    cybersecurity: [
        { title: 'Cybersecurity Full Course — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=U_P23SqJaDc', duration: '25h', level: 'Beginner' },
        { title: 'Google Cybersecurity Certificate (Coursera)', platform: 'coursera', url: 'https://www.coursera.org/professional-certificates/google-cybersecurity', duration: '6 months', level: 'Beginner' },
    ],
    html: [
        { title: 'HTML Full Course — freeCodeCamp', platform: 'youtube', url: 'https://www.youtube.com/watch?v=kUMe1FH4CHE', duration: '4h', level: 'Beginner' },
        { title: 'HTML — MDN Web Docs', platform: 'mdn', url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', duration: 'Self-paced', level: 'All levels' },
    ],
};

export function getPlatformColor(platform) {
    const colors = {
        mycaptain: '#7c3aed',
        youtube: '#ff0000',
        freecodecamp: '#006400',
        coursera: '#0056d2',
        mdn: '#1d4ed8',
        official: '#7c3aed',
    };
    return colors[platform] || '#6b7280';
}

// ── Lookup helper: searches a given catalog by exact key then partial match ────
function lookupCatalog(catalog, normalised) {
    if (catalog[normalised]) return catalog[normalised];
    for (const [key, courses] of Object.entries(catalog)) {
        if (normalised.includes(key) || key.includes(normalised)) {
            return courses;
        }
    }
    return null;
}

export function getCoursesForSkill(skill) {
    const normalised = skill.toLowerCase().trim();

    // 1. Try MyCaptain first
    const mycaptainMatch = lookupCatalog(MYCAPTAIN_CATALOG, normalised);
    if (mycaptainMatch) return mycaptainMatch;

    // 2. Fall back to popular free courses
    const freeMatch = lookupCatalog(FREE_CATALOG, normalised);
    if (freeMatch) return freeMatch;

    // 3. Last resort: generic search links
    const encoded = encodeURIComponent(skill);
    return [
        {
            title: `Search "${skill}" on YouTube`,
            platform: 'youtube',
            url: `https://www.youtube.com/results?search_query=${encoded}+full+course+free`,
            duration: 'Various',
            level: 'All levels',
        },
        {
            title: `Search "${skill}" on freeCodeCamp`,
            platform: 'freecodecamp',
            url: `https://www.freecodecamp.org/news/search/?query=${encoded}`,
            duration: 'Various',
            level: 'All levels',
        },
        {
            title: `Search "${skill}" on Coursera (free audit)`,
            platform: 'coursera',
            url: `https://www.coursera.org/search?query=${encoded}&price=Free`,
            duration: 'Various',
            level: 'All levels',
        },
    ];
}