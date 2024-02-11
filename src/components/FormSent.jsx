import React from 'react';
import Lottie from 'lottie-react-web';
import styles from '../modules/styles.module.css'
import animationData from '../assets/animations/flanna.json'; // Replace 'success-animation.json' with the path to your Lottie animation JSON file

function FormSent() {
  return (
    <div style={{ textAlign: 'center'}}>
      <h2 className={`${styles.title}`}>WOOOHOOO! We recieved your request</h2>
      <p className={`${styles.text_no_margin}`}>One of our team members will contact you shortly.</p>
      <Lottie
        options={{
          animationData: animationData,
          loop: true,
        }}
        width={250}
        height={250}
      />
    </div>
  );
}

export default FormSent;
