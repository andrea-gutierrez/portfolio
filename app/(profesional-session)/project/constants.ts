import {ProjectDetails} from "./interfaces/project.interface";

export const PROJECT_LIST: ProjectDetails[] = [
    {
        challenges: [
            'Ensuring reliability with low-cost components',
            'Achieving regulatory compliance'
        ],
        description: `Eira is a revolutionary project aimed at addressing the shortage of respiratory equipment,
                        particularly during the COVID-19 pandemic. Inspired by global collaboration among engineers,
                        Eira combines both hardware and software solutions to create effective respiratory equipment.`,
        features: [
            'Real-time monitoring',
            'Remote access',
            'Easy assembly with local materials'
        ],
        images: [
            {
                alt: 'Final Prototype',
                src: '/images/projects/eira/prototype_final.jpg'
            },
            {
                alt: 'Electronic Device',
                src: '/images/projects/eira/electronic.jpeg',
            }
        ],
        technologies: [
            'Arduino',
            'Flutter',
            'Eagle (Autodesk)',
            'Python'
        ],
        title: "Eira project"
    }
];