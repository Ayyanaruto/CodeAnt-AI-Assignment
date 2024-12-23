import { Search } from 'lucide-react';

import './SearchBar.css';
interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
      
    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Search Repositories"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">
                <Search size={16} />
            </button>
        </form>
    );
}
export default SearchBar;