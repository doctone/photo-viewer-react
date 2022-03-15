import './App.css';
import { Title } from './Components/Title/Title';
import { imageUrls } from './images';
import { useState } from 'react';
import { CurrentImage } from './Components/CurrentImage/CurrentImage';
import { RandomImage } from './Components/RandomImage/RandomImage';
import { PhotoViewer } from './Components/PhotoViewer/PhotoViewer';
import { SelectionToggler } from './Components/SelectionToggler/SelectionToggler';

function App() {
  const [image, setImage] = useState(imageUrls[Math.floor(Math.random()*imageUrls.length)]);
  const [image2, setImage2] = useState(imageUrls[Math.floor(Math.random()*imageUrls.length)]);
  const [leftSelection, setSelection] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <CurrentImage currentImage={image} image2={image2} />
        <RandomImage setImage={setImage} setImage2={setImage2} images={imageUrls}/>
      </header>
      <section className='title'>
      <h3>URL of selected image: {image} </h3>
      <SelectionToggler selection={leftSelection} setSelection={setSelection}/>
      </section>
      <PhotoViewer imageUrls={imageUrls} setImage={setImage} setImage2={setImage2} currentImage={image} image2={image2} selection={leftSelection}/>
    </div>
  );
}

export default App;