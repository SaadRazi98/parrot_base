import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";
import { PhotosShow } from "./PhotosShow";
import { Modal } from "./Modal";

export function Content() {
  const [photos, setPhotos] = useState([]);
  const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});
  
  const handleIndexPhotos = () => {
    console.log("handleIndexPhotos");
    axios.get("http://localhost:3000/photos.json").then((response) => {
      console.log(response.data);
      setPhotos(response.data);
    });
  };
  
  const handleShowPhoto = (photo) => {
    console.log("handleShowPhoto", photo);
    setIsPhotosShowVisible(true);
    setCurrentPhoto(photo);
  };
  
  const handleClose = () => {
    console.log("handleClose");
    setIsPhotosShowVisible(false);
  };
  
  useEffect(handleIndexPhotos, []);

  
  
  return (
    <div>
      <h1>Welcome to Parrot Base!</h1>
      <PhotosIndex photos={photos} onShowPhoto={handleShowPhoto} />
      <Modal show={isPhotosShowVisible} onClose={handleClose}>
        <PhotosShow photo={currentPhoto} />
        </Modal>
    </div>
  )
}