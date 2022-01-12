import React ,{useState}from "react";

import PhotoCollection from "./PhotosCollections";
import ImageViewer from 'react-simple-image-viewer';
const Photos =()=>{
    const [photos,Setphotos]=useState(["https://b.zmtcdn.com/data/pictures/5/18703405/3e60c9ad706c2fdf6b66ce54205dbd90.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/db3/a256a81580ca03cb57b302f9e1c8ddb3_1602321427.jpg"]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [CurrentImg, setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);
  
    return(
        <>
        {isMenuOpen && (
        <ImageViewer
          src={ photos }
          currentIndex={ CurrentImg }
          disableScroll={ false }
          onClose={ closeViewer }
        />
      )}
       
             <div className="flex flex-wrap gap-3" onClick={openViewer}>
             {
          
            photos.map((photo)=>{
                return(
                    <PhotoCollection image={photo} 
                      closeViewer={closeViewer}
                    />
                )
            })
        }
        </div>
    
        </>
    )
}
export default Photos;