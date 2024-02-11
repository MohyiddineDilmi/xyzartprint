import React from 'react';
import AppBar from './AppBar';
import Header from './Header';
import ContactForm from '../components/ContactForm';
import WeightCalculation from '../components/WeightCalculator'
import ParentComponent from './ParentComponent'
import ContactUs from '../components/ContactUs';

const vBg = 'https://raw.githubusercontent.com/MohyiddineDilmi/data/main/videos/full_bg.mp4';

function Home() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#1E1E1E",
                    paddingBottom: '2rem'
                }}
            >
                <div className="container">
                        <AppBar/>
                        <Header/>
                        <ParentComponent/>
                        <ContactUs/>
                    </div>
                </div>
        </>
    );
}

export default Home;
