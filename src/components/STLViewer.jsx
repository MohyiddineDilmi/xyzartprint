import React, { useState } from 'react';
import {StlViewer} from "react-stl-viewer";

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
};

function STLViewer() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(URL.createObjectURL(file));
    };

    return (
        <div>
            <input type="file" accept=".stl" onChange={handleFileChange} />
            {selectedFile && (
                <StlViewer
                    style={style}
                    orbitControls
                    shadows
                    url={selectedFile}
                />
            )}
        </div>
    );
}

export default STLViewer;
