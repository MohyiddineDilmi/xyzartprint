import React, { useState } from 'react';

function Estimator() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleMaterialChange = (e) => {
    const material = e.target.value;
    setSelectedMaterial(material);
  };

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, such as uploading file to Firebase
    console.log('Selected file:', selectedFile);
    console.log('Selected material:', selectedMaterial);
    console.log('Selected color:', selectedColor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Upload STL file</label>
        <input
          type="file"
          id="file"
          accept=".stl"
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <label htmlFor="material">Material</label>
        <select
          id="material"
          value={selectedMaterial}
          onChange={handleMaterialChange}
          required
        >
          <option value="">Select Material</option>
          <option value="PLA">PLA</option>
          <option value="ABS">ABS</option>
          <option value="FC">FC</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <select
          id="color"
          value={selectedColor}
          onChange={handleColorChange}
          required
        >
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Estimator;
