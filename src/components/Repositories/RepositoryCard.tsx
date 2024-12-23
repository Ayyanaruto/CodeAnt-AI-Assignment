import { ProgrammingLanguage, RepositoryCardProps } from './types';
import { getLanguageConfig } from './utils';

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => (
    <div className="repository-card">
        <div className="repo-header">
            <h3>{repo.name}</h3>
            <span className={`visibility-badge ${repo.visibility.toLowerCase()}`}>
                {repo.visibility}
            </span>
        </div>
        <div className="repo-details">
            <span className="language">
                <span
                    className="language-dot"
                    style={{
                        backgroundColor: getLanguageConfig(repo.language as ProgrammingLanguage).color,
                        border: `1px solid ${getLanguageConfig(repo.language as ProgrammingLanguage).bgColor}`
                    }}
                />
                {repo.language}
            </span>
            <span className="size">{repo.size}</span>
            <span className="updated">Updated {repo.updated}</span>
        </div>
    </div>
);
export default RepositoryCard;