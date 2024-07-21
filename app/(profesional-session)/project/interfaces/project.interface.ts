export interface ProjectDetails {
    challenges: AdditionalDetails[];
    description: string;
    features: AdditionalDetails[];
    impactOvercome: string;
    technologies: string[];
    title: string;
    images: ImageDetails[];
    hasGithub: boolean;
}

interface AdditionalDetails {
    title: string;
    description: string;
}

interface ImageDetails {
    alt: string;
    src: string;
}