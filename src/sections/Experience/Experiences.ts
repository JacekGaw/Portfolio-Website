interface ExperienceType {
    company: string
    dates: string
    jobTitle: string
    description: string
    projects?: ProjectType
}

interface ProjectType {
    name: string
    stack: string
    description: string
}

export const Experiences: ExperienceType[] = [
    {
        company: "PROA Technology",
        dates: "03.2024 - now",
        jobTitle: "Software Engineer",
        description: "At PROA Technology, I work as a Software Engineer, focusing on frontend and full-stack development with JavaScript, TypeScript, React, and Node.js. I build user-friendly UIs"
    }
]