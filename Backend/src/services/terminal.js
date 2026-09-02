/*{
  matchScore: 88,
  technicalQuestions: [
    {
      question: 'You mentioned optimizing API response time by 30%. Can you elaborate on the techniques you used for query optimization in MongoDB?',
      intention: 'To assess practical experience with database performance tuning and specific MongoDB knowledge beyond basic CRUD operations.',
      answer: 'Discuss indexing strategies (single-field, compound, text, geospatial), explain the use of `explain()` to analyze query performance, aggregation pipeline optimization, projection to return only necessary fields, and potential denormalization strategies for read-heavy operations.'
    },
    {
      question: "The job description mentions deploying applications on cloud platforms like AWS/GCP. While you've used Vercel/Render, can you describe your understanding of deploying a MERN stack application on an IaaS platform like AWS EC2 or a PaaS like Heroku/AWS Elastic Beanstalk? What are the key differences and considerations?",
      intention: 'To gauge understanding of cloud deployment principles beyond managed platforms and evaluate adaptability to different deployment environments.',
      answer: 'Explain the difference between PaaS (Platform as a Service) like Heroku/Elastic Beanstalk/Vercel (where infrastructure is managed) and IaaS (Infrastructure as a Service) like EC2 (where you manage OS, runtime, etc.). Discuss steps for manual deployment on EC2 (server setup, Nginx/Apache reverse proxy, PM2 for Node.js, MongoDB setup), and the benefits/drawbacks of each approach (control vs. ease of use).'
    },
    {
      question: "You've implemented JWT-based authentication. Can you explain the flow of JWT authentication, including how tokens are generated, sent, validated, and how you handle token expiration and refresh tokens securely?",
      intention: 'To ensure a deep understanding of security best practices, state management, and robust authentication implementations.',
      answer: 'Explain the three parts of a JWT (Header, Payload, Signature). Detail the sign-in process (user credentials -> server generates JWT -> sends to client). Describe how the client stores (e.g., HTTP-only cookies) and sends the token with requests. Explain server-side validation. For expiration, discuss using a shorter access token and a longer refresh token, stored securely (e.g., database for refresh tokens), and the process for obtaining a new access token using a refresh token.'
    },
    {
      question: 'In React, how do you manage global state in complex applications without relying solely on Redux? When would you still choose Redux over Context API + `useReducer`?',
      intention: 'To assess knowledge of modern React state management patterns and the ability to choose appropriate tools based on project needs.',
      answer: 'Discuss Context API with `useReducer` for local-ish global state or smaller applications. Highlight `useState` and `useContext` for simpler cases. Explain that Redux is often chosen for very large applications with complex state interactions, middleware needs (e.g., for async actions), strict data flow, and powerful developer tooling, even if Context API can provide similar functionality with more boilerplate.'
    },
    {
      question: 'Describe a challenging technical problem you faced in a project and how you approached solving it. What was the outcome, and what did you learn?',
      intention: 'To evaluate problem-solving skills, technical depth, and the ability to learn from experience.',
      answer: 'Use the STAR method: Situation, Task, Action, Result. Focus on a problem that required more than a trivial solution. Detail the troubleshooting steps, research, collaboration (if any), alternative solutions considered, and the specific technical solution implemented. Conclude with the positive outcome and a key learning point.'
    }
  ],
  behavioralQuestion: [
    {
      question: 'You mentioned collaborating with a team of 5 using Git and Agile methodology. Can you describe your role within the team and a specific instance where you had to resolve a conflict or disagreement with a team member regarding a technical approach?',
      intention: 'To understand teamwork skills, conflict resolution, and ability to contribute positively to a team dynamic within an Agile environment.',
      answer: "Describe your specific contributions in the team (e.g., feature development, code reviews, API design). For conflict, explain the situation impartially, describe the differing technical opinions, the steps taken to understand each other's perspectives (e.g., discussing pros/cons, prototyping), how a consensus was reached, and the positive outcome for the project and team relationship. Emphasize communication and compromise."
    },
    {
      question: "Your self-description mentions you're looking to take ownership of features end-to-end. Can you give an example from your past experience where you took significant ownership of a task or feature, from conception to deployment? What were the challenges, and how did you overcome them?",
      intention: 'To assess initiative, responsibility, project management skills (even informal), and ability to see tasks through.',
      answer: 'Describe a project or feature where you were primarily responsible. Outline the different phases: requirements gathering, design, development, testing, and deployment. Discuss specific challenges encountered (e.g., unexpected technical hurdles, scope changes, communication issues) and how you independently or collaboratively addressed them. Highlight the successful completion and impact.'
    },
    {
      question: "You've recently started exploring AI integrations using the Gemini API for your AI Resume Builder project. What motivated you to learn this new technology, and how do you typically approach learning a new skill or framework that isn't directly part of your day-to-day work?",
      intention: 'To understand initiative, self-learning capabilities, and adaptability to new technologies, which is crucial in a fast-evolving tech landscape.',
      answer: 'Explain the motivation (e.g., interest in AI, solving a specific problem in the project, seeing industry trends). Describe your learning process: resources used (documentation, tutorials, courses), hands-on experimentation, building small projects, and how you integrated it into your main project. Emphasize a structured and practical approach to learning.'
    }
  ],
  skillGaps: [
    { skill: 'Docker', severity: 'medium' },
    {
      skill: 'CI/CD pipelines (beyond basic Vercel/Render deployments)',
      severity: 'medium'
    },
    { skill: 'Redis or caching strategies', severity: 'medium' },
    { skill: 'GraphQL', severity: 'low' },
    {
      skill: 'Specific experience with AWS/GCP IaaS/PaaS services for deployment',
      severity: 'medium'
    }
  ],
  preparationPlan: [
    {
      day: 1,
      focus: 'Strengthening Core MERN Concepts & Advanced React',
      tasks: [Array]
    },
    {
      day: 2,
      focus: 'API Design & Database Optimization',
      tasks: [Array]
    },
    {
      day: 3,
      focus: 'Cloud Deployment & Docker Basics',
      tasks: [Array]
    },
    { day: 4, focus: 'CI/CD & Caching Strategies', tasks: [Array] },
    {
      day: 5,
      focus: 'System Design & Behavioral Preparation',
      tasks: [Array]
    },
    { day: 6, focus: 'Mock Interview & Review', tasks: [Array] },
    { day: 7, focus: 'Final Polish & Rest', tasks: [Array] }
  ]
}*/