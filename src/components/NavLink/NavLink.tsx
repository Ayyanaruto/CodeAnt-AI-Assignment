interface NavLinkProps {
    href: string;
    icon: React.ReactNode;
    text: string;
    isActive?: boolean;
    onClick: () => void;
}
const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, onClick, isActive = false }) => (
    <a href={href} className={isActive ? 'active' : ''} onClick={onClick}>
        {icon}
        {text}
    </a>
);
export default NavLink;