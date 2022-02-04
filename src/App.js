import './App.css';
import { Title } from './Title/Title';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { imageUrls } from './images';
import { useState } from 'react';


function App() {
  const [image, setImage] = useState('Please select an image');
  return (
    <div className="App">
      <header className="App-header">
        <Title />
      </header>
      <h3>URL of selected image: {image} </h3>
      <main className="photo-container">
        <button onClick={() => {setImage(imageUrls[0])}}><PhotoViewer imageurl={imageUrls[0]}/></button>
        <button onClick={() => {setImage(imageUrls[1])}}><PhotoViewer imageurl={imageUrls[1]}/></button>
        <button onClick={() => {setImage(imageUrls[2])}}><PhotoViewer imageurl={imageUrls[2]}/></button>
        <button onClick={() => {setImage(imageUrls[3])}}><PhotoViewer imageurl={imageUrls[3]}/></button>
        <button onClick={() => {setImage(imageUrls[4])}}><PhotoViewer imageurl={imageUrls[4]}/></button>
        <button onClick={() => {setImage(imageUrls[5])}}><PhotoViewer imageurl={imageUrls[5]}/></button>
        <button onClick={() => {setImage(imageUrls[6])}}><PhotoViewer imageurl={imageUrls[6]}/></button>
        <button onClick={() => {setImage(imageUrls[7])}}><PhotoViewer imageurl={imageUrls[7]}/></button>
        <button onClick={() => {setImage(imageUrls[8])}}><PhotoViewer imageurl={imageUrls[8]}/></button>
      </main>
    </div>
  );
}

export default App;