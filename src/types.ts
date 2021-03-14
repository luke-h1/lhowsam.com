export interface BlogPost {
    title: string;
    summary: string;
    slug: string;
    date: string;
    tags: string[];
}

export interface ProjectPost {
    summary: string;
    github: string;
    slug: string;
    tags: string[];
    title: string;
    site?: string;
}
