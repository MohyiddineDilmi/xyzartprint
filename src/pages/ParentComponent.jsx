import React, { useState } from 'react';
import WeightCalculator from '../components/WeightCalculator';
import ContactForm from '../components/ContactForm';
import styles from '../modules/styles.module.css'

function ParentComponent() {

  const [selectedColor, setSelectedColor] = useState('#000000');
  const [weight, setWeight] = useState(0);
  const [materialName, setMaterialName] = useState('PLA'); // Default to the density of the first material

  return (
    <div>
      <div className={`${styles.flex_row}`}>
        <WeightCalculator
          selectedColor={selectedColor}
          handleColorChange={setSelectedColor}
          weight={weight}
          weightChange={setWeight}
          materialName={materialName}
          materialNameChange={setMaterialName}
        />
        <ContactForm
          selectedColor={selectedColor}
          selectedMaterial={materialName}
          weight={weight}
        />
      </div>
    </div>
  );
}

export default ParentComponent;
