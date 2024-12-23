export interface Repository {
    name: string;
    visibility: string;
    language: string;
    size: string;
    updated: string;
}

export interface RepositoryCardProps {
    repo: Repository;
}
export type ProgrammingLanguage =
    | 'React'
    | 'Javascript'
    | 'Python'
    | 'Swift'
    | 'Java'
    | 'HTML/CSS'
    | 'PHP'
    | 'TypeScript'
    | 'Go'
    | 'Ruby'
    | 'C++'
    | 'C#'
    | 'Shell'
    | 'Rust';

export interface LanguageConfig {
    color: string;
    bgColor: string;
}