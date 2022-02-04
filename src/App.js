import './App.css';
import { Title } from './Title/Title';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import { imageUrls } from './images';
import { useState } from 'react';
import { CurrentImage } from './CurrentImage/CurrentImage';

function App() {
  const [image, setImage] = useState('Please select an image');

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <CurrentImage currentImage={image} />
      </header>
      <h3>URL of selected image: {image} </h3>
      <main className="photo-container">
      { imageUrls.map(imageUrl => (
            <PhotoViewer imageUrl = {imageUrl} setImage={setImage}/>
        ))};
      </main>
    </div>
  );
}

export default App;