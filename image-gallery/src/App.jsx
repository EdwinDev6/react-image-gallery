import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './index.css'; // Asegúrate de importar tu archivo CSS

function App() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className='container'>
      <div className='gallery-wrapper'>
        <ImageGallery
          items={images}
          autoPlay={true}
          slideInterval={2000}
          showBullets={true}
          showPlayButton={false}
          thumbnailPosition='left'
          showNav={false}
        />
      </div>
    </div>
  );
}

export default App;
