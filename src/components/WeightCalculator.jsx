import React, { useState } from 'react';
import { StlViewer } from 'react-stl-viewer';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import styles from '../modules/styles.module.css'
import './weightCalculator.css'
import { materials, colors } from "./constants";

const style = {
    top: 0,
    left: 0,
    // width: '50vw',
    height: '50vh',
    color: '#FF0000',
};

function WeightCalculation({selectedColor, handleColorChange, weight, weightChange, materialName, materialNameChange }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [model, setModel] = useState(null);
    // const [weight, setWeight] = useState(null);
    // const [selectedColor, setSelectedColor] = useState('#000000');
    const [error, setError] = useState(null);
    const [materialDensity, setMaterialDensity] = useState(materials[0].density); // Default to the density of the first material

    const handleFileChange = (event) => {
        setError(null); // Clear any previous errors
        setSelectedFile(event.target.files[0]);
        calculateWeight(event.target.files[0], materialDensity); // Calculate weight using the selected file and current material density
    };    

    const colorOnChange = (event) => {
        handleColorChange(event.target.value);
        console.log("color", event.target.value)
    };  

    const handleMaterialChange = (event) => {
        const material = materials.find( x => x.name == event.target.value);
        setMaterialDensity(parseFloat((material || {}).density) || 0); // Update material density when user selects a different material
        calculateWeight(selectedFile, parseFloat(event.target.value)); // Recalculate weight using the selected file and new material density
        materialNameChange(material.name)
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
            
            // Calculate volume in cubic millimeters
            const originalVolume = calculateVolume(geometry); 
            // Calculate volume with 12% internal filling
            const filledVolume = originalVolume * 0.12;
            
            const weightInGrams = (density * filledVolume) / 1000; // Convert volume from cubic millimeters to cubic centimeters
            weightChange(weightInGrams);
            console.log('weight in gram', weightInGrams)
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
                <select className={`${styles.button_style}`} value={materialName} onChange={handleMaterialChange}>
                    {materials.map(material => (
                        <option key={material.name} name={material.name} value={material.name}>{material.name}</option>
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
                        showAxes
                        url={URL.createObjectURL(selectedFile)}
                        modelProps={{ color: selectedColor }}
                    />
                )}

            </div>

        </div>
    );
}

export default WeightCalculation;
