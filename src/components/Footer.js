import React from 'react';

/**
 * Footer component displays social media links with Font Awesome icons.
 */
export default function Footer() {
    return (
        <div className="footer">
            {/* GitHub icon link */}
            <a href="https://github.com/LikhithaBodepudi" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <i className="fa-brands fa-github-square"></i>
            </a>
            {/* LinkedIn icon link */}
            <a href="https://www.linkedin.com/in/likhitha-bodepudi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            
        </div>
    );
}