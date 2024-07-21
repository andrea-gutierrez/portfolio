export interface ProjectDetails {
    challenges: AdditionalDetails[];
    description: string;
    features: AdditionalDetails[];
    hasGithub: boolean;
    images: ImageDetails[];
    impactOvercome: string;
    technologies: string[];
    title: string;
    videoDemo?: string;
}

interface AdditionalDetails {
    title: string;
    description: string;
}

interface ImageDetails {
    alt: string;
    src: string;
}