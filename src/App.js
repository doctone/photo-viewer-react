import './App.css';
import { Title } from './Components/Title/Title';
import { Photo } from './Components/Photo/Photo';
import { imageUrls } from './images';
import { useState } from 'react';
import { CurrentImage } from './Components/CurrentImage/CurrentImage';
import { RandomImage } from './Components/RandomImage/RandomImage';

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
      <main className="photo-container">
      { imageUrls.map((imageUrl, index) => (
            <Photo imageUrl = {imageUrl} setImage={setImage} previousImage={image} key={index}/>
        ))};
      </main>
    </div>
  );
}

export default App;