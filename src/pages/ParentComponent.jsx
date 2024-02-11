import React, { useState } from 'react';
import WeightCalculator from '../components/WeightCalculator';
import ContactForm from '../components/ContactForm';
import styles from '../modules/styles.module.css'

function ParentComponent() {

  const [selectedColor, setSelectedColor] = useState('#000000');
  const [weight, setWeight] = useState(null);
  const [materialName, setMaterialName] = useState('PLA'); // Default to the density of the first material
  const [url, setUrl] = useState('');


  return (
    <div>
      <div className={`${styles.flex_row}`}>
        <WeightCalculator
          selectedColor={selectedColor}
          handleColorChange={setSelectedColor}
          weight={weight}
          weightChange={setWeight}
          url={url}
          urlChange={setUrl}
          // materialName={materialName}
          // materialNameChange={setMaterialName}
        />
        <ContactForm
          selectedColor={selectedColor}
          weight={weight}
          url={url}
          // materialName={materialName}
        />
      </div>
    </div>
  );
}

export default ParentComponent;
