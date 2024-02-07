import React from "react";
import './header.css';
import styles from '../modules/styles.module.css'
import Lottie from 'lottie-react-web'; // Import Lottie
import animationData from '../assets/animations/XYZ_Art_Print.json'; // Import your animation JSON file
import { TypeAnimation } from 'react-type-animation';

const slogan = 'From click to';
const description = 'We offers top-quality drone services, specializing in Aerial photography, Cinematography and Videography. Quality, safety, and customer satisfaction are our top priorities.'
const TEXTS = ['creation', 'innovation', 'safety', 'excellence'];

function Header () {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <header className="header-container">

            <div className="animation-container">
                <div className="lottie-animation" style={{ width: '150px', height: '150px'}}>
                    <Lottie
                        options={{
                            animationData: animationData, // Pass the imported animation JSON
                            loop: false, // Set loop to true if needed
                            autoplay: true, // Set autoplay to true if needed
                        }}
                    /> 
                </div>
            </div>

        
            <div className="animated-text">
                <h1 className={`${styles.title_primary} responsive-title`}>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'From click to reality',
                            1000,
                            'From click to innovation',
                            1000,
                            'From click to creation',
                            1000,
                        ]}
                        speed={10}
                        style={{
                            fontFamily: "NCTTorin-ExtraBold",
                            textAlign: 'center',
                            color: '#b78143',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            textFillColor: 'transparent',
                            WebkitTextFillColor: 'transparent',
                          }}
                        repeat={0}
                    />
                </h1>
            </div>
            {/* <p className={`${styles.text_white} responsive-description`}>{description}</p> */}
        </header>
    );
}

export default Header;
