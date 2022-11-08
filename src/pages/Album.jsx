import { SearchBar, AlbumCard, AlbumItem, Footer } from "../components";
import vertical from "./../assets/images/album-img.png";
import image1 from "./../assets/images/image-1.png";
import image2 from "./../assets/images/image-2.png";
import image3 from "./../assets/images/image-3.png";
import { useState } from "react";

const Album = () => {
  const arr = [
    {
      title: "Let me love you ~ Krisx",
      subtitle: "Single",
      duration: "4:15",
      image: vertical,
    },
    {
      title: "Watin man go do ~ Burna",
      subtitle: "African giant",
      duration: "4:25",
      image: image1,
    },
    {
      title: "Stand strong ~ Davido",
      subtitle: "Single",
      duration: "2:02",
      image: image2,
    },
    {
      subtitle: "Obi datti",
      title: "Closa ~ Ybee",
      duration: "2:23",
      image: image3,
    },
  ];
  const [state, setState] = useState(arr[0]);

  const { title, subtitle, image, duration } = state;
  console.log(state);
  return (
    <div className="w-full flex flex-col gap-4 bg-album">
      <SearchBar placeholder="Search artists" />
      <AlbumCard />
      {arr.map((item) => (
        <AlbumItem
          key={item.duration}
          item={item}
          setState={setState}
          // onclick={() => setState(item)}
        />
      ))}
      <Footer subtitle={subtitle} name={title} photo={image} />
    </div>
  );
};

export default Album;
