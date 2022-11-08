import photo from "./../assets/images/AlbumCard.png";
const Release = () => {
  return (
    <div className="w-full">
      <p className="my-2 text-2xl font-bold">New releases.</p>

      <div className="grid  grid-flow-col gap-5  pb-2 auto-cols-[153px]">
        {Array(25)
          .fill({
            image: photo,
          })
          .map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt="image"
                className="rounded-[25px] mb-2"
              />
              <p className="text-sm">Life in a bubble</p>
              <p className="text-sm text-white/[0.5]">The van</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Release;
