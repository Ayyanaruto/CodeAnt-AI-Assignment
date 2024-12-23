import { LanguageConfig, ProgrammingLanguage ,Repository} from './types';
export const getLanguageConfig = (language: ProgrammingLanguage): LanguageConfig => {
    const config: Record<ProgrammingLanguage, LanguageConfig> = {
        'React': { color: '#61dafb', bgColor: '#282c34' },
        'Javascript': { color: '#f7df1e', bgColor: '#323330' },
        'Python': { color: '#3776ab', bgColor: '#ffd43b' },
        'Swift': { color: '#ffac45', bgColor: '#000000' },
        'Java': { color: '#007396', bgColor: '#f89820' },
        'HTML/CSS': { color: '#e34c26', bgColor: '#ebebeb' },
        'PHP': { color: '#777bb4', bgColor: '#000000' },
        'TypeScript': { color: '#007acc', bgColor: '#ffffff' },
        'Go': { color: '#00add8', bgColor: '#ffffff' },
        'Ruby': { color: '#cc342d', bgColor: '#ffffff' },
        'C++': { color: '#f34b7d', bgColor: '#ffffff' },
        'C#': { color: '#178600', bgColor: '#ffffff' },
        'Shell': { color: '#89e051', bgColor: '#ffffff' },
        'Rust': { color: '#dea584', bgColor: '#000000' }
    };
    return config[language] || { color: '#666666', bgColor: '#ffffff' };
};

export const repositories: Repository[] = [
    { name: 'design-system', language: 'React', size: '7320 KB', visibility: 'Public', updated: '1 day ago' },
    { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', visibility: 'Private', updated: '2 days ago' },
    { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', visibility: 'Private', updated: '5 days ago' },
    { name: 'mobile-app', language: 'Swift', size: '3096 KB', visibility: 'Public', updated: '3 days ago' },
    { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', visibility: 'Private', updated: '6 days ago' },
    { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', visibility: 'Public', updated: '4 days ago' },
    { name: 'social-network', language: 'PHP', size: '5432 KB', visibility: 'Private', updated: '7 days ago' },
];
