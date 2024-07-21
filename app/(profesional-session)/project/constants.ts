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
        features: [
            {
                description: `The electronic device featured an adjustable control panel that allowed medical professionals to set and modify air pressure levels according to individual patient needs.`,
                title: `Customizable Air Pressure Control`
            },
            {
                description: `The mobile application, developed with Flutter, provided a graphical interface to visualize patient data from the device. This enabled doctors to monitor and respond to patient conditions effectively.`,
                title: `Real-time Data Visualization`
            },
            {
                description: `A robust backend was implemented to ensure all patient data was stored securely and could be accessed for future analysis and reference.`,
                title: `Secure Data Storage`
            }
        ],
        hasGithub: false,
        images: [
            {
                alt: 'Final Prototype',
                src: '/images/projects/eira/prototype_final.jpg'
            },
            {
                alt: 'Electronic Device',
                src: '/images/projects/eira/electronic.jpg',
            },
            {
                alt: 'Testing the device',
                src: '/images/projects/eira/test_device.jpg'
            }
        ],
        impactOvercome: `Although Eira was not publicly deployed, it garnered positive reviews from medical professionals at the General Hospital in Medellín, Colombia. The project passed all electromagnetism safety tests in accordance with Colombian regulations, affirming its quality and reliability as a healthcare solution.`,
        technologies: [
            'Flutter',
            'C++',
            'MySQL',
            'EagleCAD',
            'ChartJS'
        ],
        title: `Eira: Bridging Hardware and Frontend Solutions During the Pandemic`,
        videoDemo: '/videos/eira_demo.mp4'
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
        images: [
            {
                alt: 'Electronic Design',
                src: '/images/projects/heat_equipment/electronic_design.png'
            },
            {
                alt: 'Heat Device',
                src: '/images/projects/heat_equipment/heat_device.JPG'
            },
            {
                alt: 'Graph',
                src: '/images/projects/heat_equipment/graph.png'
            },
            {
                alt: 'User Interface',
                src: '/images/projects/heat_equipment/user_interface.png'
            }
        ],
        impactOvercome: `The Heat Equipment project significantly enhances the study of heat transfer, providing researchers and students with a powerful tool for analysis and experimentation. By leveraging IoT technology and advanced frontend design, the project demonstrates the potential of modern technology to transform educational and research methodologies.`,
        technologies: [
            'C++',
            'Python',
            'MySQL'
        ],
        title: `Heat Equipment Project: Advancing Heat Transfer Studies Through IoT and Frontend Innovation`
    }
];