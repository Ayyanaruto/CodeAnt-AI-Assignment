import RepositoryCard from "./RepositoryCard";
import { repositories } from "./utils";
import './Repositories.css';

interface RepositoriesProps {
    searchQuery: string;
}

const Repositories: React.FC<RepositoriesProps> = ({ searchQuery }) => {
    const filteredRepositories = repositories.filter((repo) => 
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.language.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="repository-list">
            {filteredRepositories.map((repo) => (
                <RepositoryCard key={repo.name} repo={repo} />
            ))}
            {filteredRepositories.length === 0 && (
                <div className="no-results">No repositories found matching "{searchQuery}"</div>
            )}
        </div>
    );
}

export default Repositories;


