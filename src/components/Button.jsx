import Proptypes from "prop-types";
import { useEffect, useState } from "react";
const Button = ({ state, background, value, func, currentState, ...rest }) => {
  const [stateValue, setStateValue] = useState({
    text: "",
    states: false,
  });
  useEffect(() => {
    setStateValue({
      text: value,
      states: state,
    });
  }, [state, background, value]);
  const { text, states } = stateValue;

  return (
    <button
      className={`flex-1 md:flex-none outline-0 border py-3 px-6 rounded-full transition-all ${
        states ? "bg-[#FACD66]" : "bg-main"
      }  ${!states && "opacity-25 "}cursor-pointer ${
        !states ? "text-lightDark" : "text-main"
      } text-sm border-solid   ${
        !states ? "border-lightDark" : "border-[#FACD66]"
      }`}
      {...rest}
      onClick={() => func(currentState)}
    >
      {text}
    </button>
  );
};
Button.Proptypes = {
  value: Proptypes.string.isRequired,
};
export default Button;
