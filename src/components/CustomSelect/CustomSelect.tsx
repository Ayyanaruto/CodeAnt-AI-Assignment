import { useState, useRef, useEffect } from "react";
import { CustomSelectProps } from "./types";
import './CustomSelect.css';



import { ChevronDown } from "lucide-react";
const CustomSelect: React.FC<CustomSelectProps> = ({ onUserSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState('UtkarshDhairyaPanwar');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const users = ['UtkarshDhairyaPanwar', 'JohnDoe', 'AliceSmith', 'BobJohnson'];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (user: string) => {
        setSelectedUser(user);
        onUserSelect(user);
        setIsOpen(false);
    };

    return (
        <div className="selectContainer" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="selectButton">
                <span className="buttonText">{selectedUser}</span>
                <ChevronDown className={`chevronIcon ${isOpen && "rotatedIcon"}`} />
            </button>

            {isOpen && (
                <div className="dropdownMenu">
                    {users.map((user, index) => (
                        <div
                            key={user}
                            onClick={() => handleSelect(user)}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`dropdownItem ${hoveredIndex === index ? 'dropdownItemHover' : ''} ${index === 0 ? 'firstItem' : ''} ${index === users.length - 1 ? 'lastItem' : ''}`}
                        >
                            {user}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;