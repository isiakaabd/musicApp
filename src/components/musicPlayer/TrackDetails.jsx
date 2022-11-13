import PropTypes from "prop-types";

const TrackDetails = ({ images, title, subtitle }) => {
  return (
    <div className="flex w-[65%] md:max-w-[300px]  gap-3 items-center justify-between">
      <div className="h-12 w-12">
        <img
          src={images?.coverart}
          alt={`image of ${title}`}
          className="rounded-[14px] w-full h-full"
        />
      </div>

      <div className="flex-1 overflow-hidden">
        <p className="text-sm font-bold overflow-hidden truncate ...">
          {title}
        </p>
        <p className="text-xs font-bold text-white/[.44]">{subtitle}</p>
      </div>
    </div>
  );
};
TrackDetails.PropTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default TrackDetails;
