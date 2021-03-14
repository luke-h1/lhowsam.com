export interface BlogPost {
    author?: string;
    date: string;
    description: string;
    slug: string;
    tags: string[]
    title: string;
}


export interface ProjectPost {
    description: string;
    github: string;
    slug: string;
    tags: string[];
    title: string; 
}