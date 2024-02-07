import React, { useState } from 'react';
import { StlViewer } from 'react-stl-viewer';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import styles from '../modules/styles.module.css'
import './weightCalculator.css'
import ContactForm from './ContactForm';

const style = {
    top: 0,
    left: 0,
    // width: '50vw',
    height: '50vh',
};

const materials = [
    { name: 'PLA', density: 1.24 }, // Example density for PLA
    { name: 'ABS', density: 1.25 }, // Example density for ABS
    // Add more materials as needed
];

const colors = [
    { name: 'Black', code: '#000000' },
    { name: 'White', code: '#FFFFFF' },
    { name: 'Red', code: '#FF0000' },
    { name: 'Green', code: '#00FF00' },
    { name: 'Blue', code: '#0000FF' },
    { name: 'Yellow', code: '#FFFF00' },
    { name: 'Orange', code: '#FFA500' },
    { name: 'Purple', code: '#800080' }
];

function WeightCalculation({selectedColor, handleColorChange, weight, weightChange}) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [model, setModel] = useState(null);
    // const [weight, setWeight] = useState(null);
    // const [selectedColor, setSelectedColor] = useState('#000000');
    const [error, setError] = useState(null);
    const [materialDensity, setMaterialDensity] = useState(materials[0].density); // Default to the density of the first material
    const [materialName, setMaterialName] = useState(materials[0].name); // Default to the density of the first material

    const handleFileChange = (event) => {
        setError(null); // Clear any previous errors
        setSelectedFile(event.target.files[0]);
        calculateWeight(event.target.files[0], materialDensity); // Calculate weight using the selected file and current material density
    };    

    const colorOnChange = (event) => {
        handleColorChange(event.target.value);
        console.log(event.target.value)
    };  

    const handleMaterialChange = (event) => {
        setMaterialDensity(parseFloat(event.target.value)); // Update material density when user selects a different material
        calculateWeight(selectedFile, parseFloat(event.target.value)); // Recalculate weight using the selected file and new material density
    };

    const calculateWeight = (file, density) => {
        if (!file) {
            setError('Please select an STL file.');
            return;
        }
    
        const reader = new FileReader();
        reader.onload = (event) => {
            const loader = new STLLoader();
            const geometry = loader.parse(event.target.result);
            setModel(geometry);
            const volume = calculateVolume(geometry); // Calculate volume in cubic millimeters
            const weightInGrams = (density * volume) / 1000; // Convert volume from cubic millimeters to cubic centimeters
            weightChange(weightInGrams);
        };
        reader.readAsArrayBuffer(file);
    };
    
    const calculateVolume = (geometry) => {
        const bbox = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
        const volume = bbox.getSize(new THREE.Vector3()).x * bbox.getSize(new THREE.Vector3()).y * bbox.getSize(new THREE.Vector3()).z;
        return volume;
    };

    return (
        <div>
            <div className='viewerContainer'>
                <div className={`${styles.button_style}`} >
                    <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
                    <label htmlFor="fileInput">Choose File</label>
                </div>  

                {/* material selector */}
                <select className={`${styles.button_style}`} value={materialDensity} onChange={handleMaterialChange}>
                    {materials.map(material => (
                        <option key={material.name} name={material.name} value={material.density}>{material.name}</option>
                    ))}
                </select>

                {/* color selector */}
                <select className={`${styles.color_selector}`} style={{ backgroundColor: selectedColor }} value={selectedColor} onChange={colorOnChange}>
                    {colors.map(color => (
                        <option key={color.code} value={color.code} style={{ backgroundColor: color.code }}></option>
                    ))}
                </select>

            </div>
            

            <div>
                {error && <p className={`${styles.text_no_margin}`}>{error}</p>}
                {weight !== null && <p className={`${styles.text_no_margin}`}>Weight: {weight.toFixed(2)} grams</p>}
                {selectedFile && (
                    <StlViewer
                        style={style}
                        orbitControls
                        shadows
                        url={URL.createObjectURL(selectedFile)}
                    />
                )}

            </div>

        </div>
    );
}

export default WeightCalculation;
