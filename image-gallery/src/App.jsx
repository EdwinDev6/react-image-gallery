import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
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
    <div>
      <div style={{ width: '50%', margin: 'auto' }}>
        <ImageGallery items={images}
          autoPlay={true}
          slideInterval={2000}
          showBullets={true}
          showPlayButton={false}
          thumbnailPosition='left'
          showNav={false}
        />
      </div>
    </div>
  )
}

export default App
