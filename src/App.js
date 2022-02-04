import './App.css';
import { Title } from './Components/Title/Title';
import { PhotoViewer } from './Components/PhotoViewer/PhotoViewer';
import { imageUrls } from './images';
import { useState } from 'react';
import { CurrentImage } from './Components/CurrentImage/CurrentImage';
import { RandomImage } from './Components/RandomImage/RandomImage';

function App() {
  const [image, setImage] = useState('Please select an image');

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <CurrentImage currentImage={image} />
        <RandomImage setImage={setImage} images={imageUrls}/>
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