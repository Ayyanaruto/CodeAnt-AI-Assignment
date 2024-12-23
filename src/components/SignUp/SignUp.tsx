import React, { useState } from 'react';
import './SignUp.css';
import {

    KeyRound,
    PieChart,

    Code2,
    Users,
    Clock,
    TrendingUp,
} from 'lucide-react';
import logo from '../../assets/logo.svg';
import Subtract from '../../assets/subtract.svg';

import github from '../../assets/github.svg';
import bitbucket from '../../assets/bitbucket.svg';
import azure from '../../assets/azure.svg';
import gitlab from '../../assets/gitlab.svg';

import { SignInOption, StatItemProps } from './types';

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => (
    <div className="stat-item">
        <div className="stat-value">{value}</div>
        <div className="stat-label">
            {icon}
            {label}
        </div>
    </div>
);

interface SignInButtonProps {
    icon: React.ReactNode;
    label: string;
    className?: string;
    onClick?: () => void;
}

const SignInButton: React.FC<SignInButtonProps> = ({
    icon,
    label,
    className = '',
    onClick
}) => (
    <button
        className={`sign-in-btn ${className}`}
        onClick={onClick}
    >
        {icon}
        {label}
    </button>
);

interface SignUpProps {
    onSignUpClick: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUpClick }) => {
    const [selectedOption, setSelectedOption] = useState<SignInOption>('SAAS');

    const stats: StatItemProps[] = [
        {
            value: '30+',
            label: 'Language Support',
            icon: <Code2 size={16} className="stat-icon" />
        },
        {
            value: '10K+',
            label: 'Developers',
            icon: <Users size={16} className="stat-icon" />
        },
        {
            value: '100K+',
            label: 'Hours Saved',
            icon: <Clock size={16} className="stat-icon" />
        }
    ];

    const saasOptions: SignInButtonProps[] = [
        {
            icon: <img src={github} alt="Github" />,
            label: 'Sign in with Github',
            className: 'github'
        },
        {
            icon: <img src={bitbucket} alt="Bitbucket" />,
            label: 'Sign in with Bitbucket',
            className: 'bitbucket'
        },
        {
            icon: <img src={azure} alt="Azure Devops" />,
            label: 'Sign in with Azure Devops',
            className: 'azure'
        },
        {
            icon: <img src={gitlab} alt="GitLab" />,
            label: 'Sign in with GitLab',
            className: 'gitlab'
        }
    ];

    const selfHostedOptions: SignInButtonProps[] = [
        {
            icon: <img src={gitlab} alt="Self Hosted GitLab" />,
            label: 'Self Hosted GitLab',
            className: 'gitlab'
        },
        {
            icon: <KeyRound size={24} />,
            label: 'Sign in with SSO',
            className: 'sso'
        }
    ];

    return (
        <div className="container">
            <div className="grid-layout">
                <div className="stats-section">
                    <div className="stats-card">
                        <div className="stats-header">
                            <img src={logo} className="stats-logo" />
                            <h2>AI to Detect & Autofix Bad Code</h2>
                        </div>
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <StatItem
                                    key={index}
                                    value={stat.value}
                                    label={stat.label}
                                    icon={stat.icon}
                                />
                            ))}
                        </div>
                        <div className="issues-card">

                            <div className="issues-icon">
                                <PieChart size={24} className="circle" />
                            </div>
                            <div className="issues-content">
                                <div className="issues-label">Issues Fixed</div>
                                <div className="issues-value">500K+</div>
                                <div className="issues-trend">
                                    <TrendingUp size={16} className="trend-arrow" />
                                    <span className="trend-value">14%</span>
                                    <span className="trend-period">This week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={Subtract} className="subtract" />
                </div>

                <div className="sign-in-container">
                    <div className="logo-section">
                        <img src={logo} className="logo" />
                        <span className="logo-text">CodeAnt AI</span>
                    </div>

                    <h1 className="welcome-text">Welcome to CodeAnt AI</h1>

                    <div className="toggle-buttons">
                        <button
                            className={`toggle-btn ${selectedOption === 'SAAS' ? 'active' : ''}`}
                            onClick={() => setSelectedOption('SAAS')}
                        >
                            SAAS
                        </button>
                        <button
                            className={`toggle-btn ${selectedOption === 'Self Hosted' ? 'active' : ''}`}
                            onClick={() => setSelectedOption('Self Hosted')}
                        >
                            Self Hosted
                        </button>
                    </div>

                    <div className="sign-in-options">
                        {(selectedOption === 'SAAS' ? saasOptions : selfHostedOptions).map((option, index) => (
                            <SignInButton
                                key={index}
                                icon={option.icon}
                                label={option.label}
                                className={option.className}
                                onClick={onSignUpClick} // Add onClick handler
                            />
                        ))}
                    </div>

                    <p className="privacy-notice">
                        By signing up you agree to the <a href="#" className="privacy-link">Privacy Policy</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

