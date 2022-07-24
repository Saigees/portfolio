export interface Project {
    name: string;
    description: string;
    body: JSX.Element;
    githubUrl?: string;
    url?: string;
    position: string;
}