
import {
    RefreshCw,
    PlusCircle,
} from 'lucide-react';

import SearchBar from '../SearchBar/SearchBar';

import './ContentHeader.css';

interface ContentHeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="content-header">
            <div className="header">
                <div className="header-title">
                    <h1>Repositories</h1>
                    <p>33 total repositories</p>
                </div>
                <div className='btn-group'>
                    <button className="refresh-btn">
                        <RefreshCw size={16} /> Refresh All
                    </button>
                    <button className="add-repo-btn">
                        <PlusCircle size={16} /> Add Repository
                    </button>
                </div>
            </div>
            <div className="actions">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            </div>
        </div>)
}

export default ContentHeader;