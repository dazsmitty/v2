import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import registerIcons from './fontawesome.js';
import resume from './assets/resume.pdf';

registerIcons();

const DATA = [
    {
        href: "https://github.com/adamalston",
        icon: ["fab", "github"],
        label: "Github",
    },
    {
        href: "https://www.linkedin.com/in/adammalston/",
        icon: ["fab", "linkedin"],
        label: "LinkedIn",
    },
    {
        href: resume,
        icon: ["fas", "file-alt"],
        label: "Resume",
    },
    {
        href: "mailto:aalston9@gmail.com",
        icon: ["fas", "paper-plane"],
        label: "Email me",
    }
];

const Icon = ({ href, icon, label }) => {
    return (
        <span className="button">
            <a href={href} target="_self" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={icon} size="3x" />
                <span className="icon_title">{label}</span>
            </a>
        </span>
    );
};

class Buttons extends Component {
    render() {
        return (
            <div>
                {DATA.map((props, i) => (
                    <Icon {...props} key={i} />
                ))}
            </div>
        );
    }
}

export default Buttons;