import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";
import { PhotosShow } from "./PhotosShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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
  
  const handleUpdatePhoto = (id, params, successCallback) => {
      console.log("handleUpdatePhoto", params);
      axios.patch(`http://localhost:3000/photos/${id}.json`, params).then((response) => {
        setPhotos(
          photos.map((photo) => {
            if (photo.id === response.data.id) {
              return response.data;
            } else {
              return photo;
            }
          })
        );
        successCallback();
        handleClose();
      });
    };




  const handleClose = () => {
    console.log("handleClose");
    setIsPhotosShowVisible(false);
  };
  
  useEffect(handleIndexPhotos, []);

  
  
  return (
    <div className ="container">
      <Signup />
      <Login />
      <LogoutLink />
      <PhotosNew onCreatePhoto={handleCreatePhoto}/>
      <br />
      <br />
      <br />
      <h1>Welcome to Parrot Base!</h1>
      <PhotosIndex photos={photos} onShowPhoto={handleShowPhoto} />
      <Modal show={isPhotosShowVisible} onClose={handleClose}>
          <PhotosShow photo={currentPhoto} onUpdatePhoto={handleUpdatePhoto} />
        </Modal>
    </div>
  );
}