import React from 'react';

const Frame = () => {
    return <div className="frame">
        <div className="frame1">
        <h1>Hello, I’m Harsh. I'm a Freelance Web Developer.</h1>
            <p>With a keen eye for design and a knack for innovative solutions, I specialize in creating beautiful, functional, and user-centric websites that stand out.</p>

            <div className="buttons">
                <button className='bttn' id = "bttn1">Know More</button>
                <button className='bttn'>Projects</button>
            </div>
            <div className="icons">
            <p>Also Availabe On</p>
                <img className = "icon" src="/images/twitter.png" alt="twitter" />
                <img className = "icon" src="/images/instagram.png" alt="insta" />
                <img className = "icon" src="/images/linkedin.png" alt="linkedin" />
            </div>
            </div>
            <img className = "frame2" src="/images/harsh.png" alt="shoe" />
</div>
}

export default Frame;