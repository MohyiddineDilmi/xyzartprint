import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


// firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyC9qTETiwoDTVQfgowwbkx7qK5kioi_pws",
    authDomain: "xyz-art-print.firebaseapp.com",
    projectId: "xyz-art-print",
    storageBucket: "xyz-art-print.appspot.com",
    messagingSenderId: "558816940225",
    appId: "1:558816940225:web:b2b63d2ed1ce8f827a4440",
    measurementId: "G-6WMVK4ZQ7L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState('');

  const handleFileInputChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const storageRef = ref(storage);
    const fileRef = ref(storageRef, selectedFile.name);

    uploadBytes(fileRef, selectedFile).then(() => {
      console.log('File uploaded successfully!');
      getDownloadURL(fileRef).then((downloadURL) => {
        console.log(downloadURL)
        setUrl(downloadURL);
      });
    }).catch(error => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded File" />}
    </div>
  );
};

export default FileUploader;
