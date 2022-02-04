import './App.css';
import { Title } from './Components/Title/Title';
import { imageUrls } from './images';
import { useState } from 'react';
import { CurrentImage } from './Components/CurrentImage/CurrentImage';
import { RandomImage } from './Components/RandomImage/RandomImage';
import { PhotoViewer } from './Components/PhotoViewer/PhotoViewer';

function App() {
  const [image, setImage] = useState(imageUrls[Math.floor(Math.random()*imageUrls.length)]);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <CurrentImage currentImage={image} />
        <RandomImage setImage={setImage} images={imageUrls}/>
      </header>
      <h3>URL of selected image: {image} </h3>
      <PhotoViewer imageUrls={imageUrls} setImage={setImage} currentImage={image}/>
    </div>
  );
}

export default App;