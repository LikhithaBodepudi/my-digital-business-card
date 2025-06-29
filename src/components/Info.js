import React from 'react';

/**
 * Info component displays the user's profile picture, name, title,
 * personal website link, and clickable Email/LinkedIn buttons.
 */
export default function Info(){
    return(
        <div className="info">
        <img src="./profile-photo.jpg" className="info--photo" alt="Profile Photo"/>
        <h1 className="info--name">Likhitha Bodepudi</h1>
        <h3 className="info--title">Software Engineer</h3>

        <div className="info--buttons">
            <a href="mailto:likhithabodepudi@gmailcom" className="button button--email">
                <i className="fa-solid fa-envelope"></i>Email
            </a>
            <a href="https://www.linkedin.com/in/likhitha-bodepudi/" target="_blank" rel="noopener noreferrer" className="button button--linkedin">
                <i className="fa-brands fa-linkedin"></i> LinkedIn           
            </a>
        </div>
    </div>
    );
    

}