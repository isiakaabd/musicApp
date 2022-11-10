import { SearchBar, AlbumCard, AlbumItem, Footer } from "../components";
import image1 from "/image-1.png";
import image2 from "/image-2.png";
import image3 from "/image-3.png";

import { useState } from "react";

const Album = () => {
  const arr = [
    {
      title: "Let me love you ~ Krisx",
      subtitle: "Single",
      duration: "4:15",
      image: image1,
    },
    {
      title:
        "This is a long text testing overflow clip ~ Hope it clips as expected ",
      subtitle: "Single",
      duration: "2:15",
      image: image1,
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

  const { title, subtitle, image } = state;

  return (
    <div className="w-full flex flex-col gap-4 bg-album">
      <SearchBar placeholder="Search artists" />
      <AlbumCard />
      {arr.map((item) => (
        <AlbumItem key={item.duration} item={item} setState={setState} />
      ))}
      <Footer subtitle={subtitle} name={title} photo={image} />
    </div>
  );
};

export default Album;
