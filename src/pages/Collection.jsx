import { Button, SearchBar, CollectionCard, Footer } from "../components";
import { useState } from "react";
import music from "/collect.png";
import collect from "/collect2.png";
import collect2 from "/collect3.png";
const Collection = () => {
  const [toggleState, setToggleState] = useState(true);

  return (
    <div className="w-full flex flex-col gap-4">
      <SearchBar placeholder="Search artists" />
      <div className="flex items-center gap-4 justify-center lg:justify-start">
        <Button
          value="My collection"
          state={toggleState}
          currentState={true}
          func={setToggleState}
        />
        <Button
          value="Likes"
          state={!toggleState}
          currentState={false}
          func={setToggleState}
        />
      </div>
      {toggleState ? (
        <div className="flex justify-between lg:justify-start flex-wrap gap-8">
          <CollectionCard img={music} />
          <CollectionCard img={collect} />
          <CollectionCard img={collect2} />
        </div>
      ) : (
        <p className="text-bold">Nothing Available here</p>
      )}
      <Footer subtitle={"Obi datti"} name={"Closa ~ Ybee"} photo={music} />
    </div>
  );
};

export default Collection;
