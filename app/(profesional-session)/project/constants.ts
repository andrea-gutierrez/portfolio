import {ProjectDetails} from "./interfaces/project.interface";


export const PROJECT_INFO_LIST: ProjectDetails[] = [
    {
        challenges: [
            {
                description: `Adapting the MIT design to meet local manufacturing capabilities while ensuring compliance with medical standards was a significant challenge. It required meticulous engineering to create a functional and reliable device.`,
                title: 'Design Adaptation'
            },
            {
                description: `Ensuring seamless communication between the electronic device, mobile application, and backend system involved overcoming technical hurdles related to data transmission and device interfacing.`,
                title: 'Integration of Hardware and Software'
            },
            {
                description: `Navigating the regulatory landscape for medical devices in Colombia, including passing electromagnetism safety tests, was crucial to ensure the device met all safety and quality standards.`,
                title: 'Regulatory Compliance'
            }
        ],
        description: `The Eira project was developed to address the critical shortage of respiratory equipment in Colombia during the COVID-19 pandemic. With global supply chains disrupted and local manufacturing constraints, our team took inspiration from an MIT design to create a locally-produced solution. This project seamlessly combined hardware engineering with advanced frontend development to deliver an innovative healthcare tool.`,
        features: [],
        hasGithub: false,
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
        impactOvercome: `Although Eira was not publicly deployed, it garnered positive reviews from medical professionals at the General Hospital in Medellín, Colombia. The project passed all electromagnetism safety tests in accordance with Colombian regulations, affirming its quality and reliability as a healthcare solution.`,
        technologies: [
            'Flutter',
            'C++',
            'MySQL',
            'EagleCAD'
        ],
        title: `Eira: Bridging Hardware and Frontend Solutions During the Pandemic`
    },
    {
        challenges: [
            {
                description: `Combining IoT technology with a responsive and intuitive frontend required careful planning to ensure seamless data flow and user interaction.`,
                title: 'Integration of IoT with Frontend Design'
            },
            {
                title: 'Data Accuracy and Reliability',
                description: `Ensuring the accuracy of real-time data and the reliability of control systems posed technical challenges, requiring rigorous testing and validation.`
            },
            {
                description: `Designing an interface that effectively communicates complex data while remaining accessible to users with varying levels of expertise.`,
                title: 'User Experience Design'
            }
        ],
        description: `The Heat Equipment project represents a fusion of cutting-edge frontend design and IoT technology, delivering an advanced platform for studying heat transfer in various systems. This project integrates real-time monitoring and control with a sophisticated user interface, showcasing the transformative power of IoT in educational and research settings.`,
        features: [
            {
                description: `Provides live data on heat transfer processes, enabling users to observe and analyze thermal dynamics as they occur.`,
                title: 'Real-time Monitoring'
            },
            {
                description: `Allows for precise control over heat sources and measurement systems through a user-friendly frontend interface.`,
                title: 'Advanced Control Interface'
            }
        ],
        hasGithub: false,
        images: [],
        impactOvercome: `The Heat Equipment project significantly enhances the study of heat transfer, providing researchers and students with a powerful tool for analysis and experimentation. By leveraging IoT technology and advanced frontend design, the project demonstrates the potential of modern technology to transform educational and research methodologies.`,
        technologies: [
            'C++',
            'Python',
            'MySQL'
        ],
        title: `Heat Equipment Project: Advancing Heat Transfer Studies Through IoT and Frontend Innovation`
    }
];