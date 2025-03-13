export interface ExperienceType {
    company: string
    dates: string
    jobTitle: string
    description: string
    projects?: ProjectType[]
}

interface ProjectType {
    name: string
    stack: string[]
    description: string
}

export const Experiences: ExperienceType[] = [
    {
        company: "PROA Technology",
        dates: "03.2024 - now",
        jobTitle: "Software Engineer",
        description: `In my current role, I work extensively with JavaScript (React, Node.js) and Python (Flask) to develop both front-end and back-end solutions. I have been a part of several high-impact projects, applying my skills in full-stack development, CI/CD and web scraping automation. Working within an Agile Scrum team has enhanced my collaboration and project management abilities`,
        projects: [
            {
                name: "Smart Email Dispatcher",
                stack: ["React JS", "Node JS","Redux", "Python", "Tailwind CSS", "Docker"],
                description: "Project supported by the National Centre for Research and Development. I developed a full-stack JavaScript application that interfaces with a system powered by AI for automated email analysis and management, streamlining communication workflows and improving efficiency."
            },
            {
                name: "PROA Portal",
                stack: ["Flask", "Python","CSS 3", "Docker", "CI / CD"],
                description: "Built a full-stack Flask web app that serves as a centralized hub for controlling the company’s voicebots and chatbots. Users can manage bots, review work history, check statistics, generate reports, and much more."
            },
            {
                name: "PROA Website",
                stack: ["React JS", "Node JS","Tailwind CSS", "WordPress", "Slack Integrations", "Figma", "Jest"],
                description: "As the main developer, I designed and developed a marketing website using React, Tailwind CSS and Framer Motion. The site is fully responsive, visually appealing and serves as the company’s digital showcase."
            },
            {
                name: "Automation Tools / Web Scraping Bots",
                stack: ["Python", "Selenium","Robot Framework"],
                description: "Developed web scraping bots using Python, Selenium and Robot Framework to automate data extraction from multiple web services, significantly enhancing the efficiency of data collection."
            },
            
        ]
    },
    {
        company: "Enfinitec Poland Sp. z o.o.",
        dates: "10.2019 - 03.2024",
        jobTitle: "IT Technician",
        description: `Diagnosing and repairing computer hardware.`,
    }
]