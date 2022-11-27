import PropTypes from "prop-types";

const TrackDetails = ({ images, max, title, subtitle, value }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

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
        <p
          className="text-sm font-bold overflow-hidden truncate ..."
          title={title}
        >
          {title}
        </p>
        <p className="text-xs font-bold text-white/[.44]">{subtitle}</p>
        <p className="text-white text-xs">
          {value === 0 ? "0:00" : getTime(value)}
        </p>
      </div>
    </div>
  );
};
TrackDetails.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default TrackDetails;
