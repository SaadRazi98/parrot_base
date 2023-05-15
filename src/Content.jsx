import { PhotosIndex } from "./PhotosIndex";

export function Content() {
  const photos = [
     {id: 1, name: "Quaker", url: "https://www.animalhumanesociety.org/sites/default/files/styles/scale_width_240/public/media/image/2017-07/bird-1435859_1920.jpg?itok=Vhfbuvm2ttps://via.placeholder.com/150", width: 150, height: 150},
     {id: 2, name: "Sun Conure", url: "https://cf.ltkcdn.net/birds/bird-species/images/std/324030-800x533-sun-conure-care.webp", width: 150, height: 150},
    ];
  
  
  return (
    <div>
      <h1>Welcome to Parrot Base!</h1>
      <PhotosIndex photos={photos} />
    </div>
  )
}