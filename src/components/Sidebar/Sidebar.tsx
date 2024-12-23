import React from 'react';
import {
    FolderGit2,
    Code2,
    ShieldCheck,
    HelpCircle,
    Settings,
   HeadsetIcon,
    LogOut
} from 'lucide-react';

import NavLink from '../NavLink/NavLink';
import CustomSelect from '../CustomSelect/CustomSelect';
import './SideBar.css';

interface SideBarProps {
    isSidebarOpen: boolean;
    setBannerUser: (user: any) => void;
    activeLink: string;
    setActiveLink: (link: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen, setBannerUser, activeLink, setActiveLink }) => {
    return (
        <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <CustomSelect onUserSelect={setBannerUser} />
            <div className="sidebar-links">
                {[
                    { href: "#", icon: <FolderGit2 size={20} />, text: "Repositories" },
                    { href: "#", icon: <Code2 size={20} />, text: "AI Code Review" },
                    { href: "#", icon: <ShieldCheck size={20} />, text: "Cloud Security" },
                    { href: "#", icon: <HelpCircle size={20} />, text: "How to Use" },
                    { href: "#", icon: <Settings size={20} />, text: "Settings" }
                ].map((link, index) => (
                    <NavLink
                        key={index}
                        href={link.href}
                        icon={link.icon}
                        text={link.text}
                        isActive={link.text === activeLink}
                        onClick={() => setActiveLink(link.text)}
                    />
                ))}
            </div>
            <div className="sidebar-footer">
                <NavLink href="#" icon={<HeadsetIcon size={20} />} text="Support" onClick={() => setActiveLink('Feedback')} />
                <NavLink href="#" icon={<LogOut size={20} />} text="Logout" onClick={() => { setActiveLink('Feedback') }} />
            </div>
        </aside>
    );
};
export default SideBar;