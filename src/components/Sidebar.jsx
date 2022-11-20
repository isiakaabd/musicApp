import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { activeIcon } from "../store/reducers/musicReducer";
import { menuIcons } from "../utilities";
import MobileNav from "./MobileNav";
import Logo from "/src/assets/images/Logo";

const Sidebar = () => {
  const { isActiveState } = useSelector((state) => state.fetchMusic);

  const dispatch = useDispatch();

  return (
    <>
      <header className="hidden w-[52px]  gap-4 flex-col items-center lg:flex">
        <Logo className="h-8" />
        <nav
          role="navigation"
          className=" flex-col hidden lg:flex justify-center items-center mt-[40px] gap-y-8"
        >
          <ul className="list-none">
            <div className="dark-bg">
              {menuIcons?.slice(0, 4).map((item, index) => {
                const { path, icon, text } = item;

                return (
                  <li
                    className={`transition-all duration-200 ease-linear ${
                      index === isActiveState ? "active svg" : "svg"
                    }`}
                    onClick={() => {
                      dispatch(activeIcon(index));
                    }}
                    key={`${index}+ ${path}`}
                  >
                    <Link to={path} title={text}>
                      {icon}
                    </Link>
                  </li>
                );
              })}
            </div>
            <div className="dark-bg  flex items-center flex-col gap-y-8 justify-center">
              {menuIcons?.slice(4).map((item, index) => {
                const { path, icon, text } = item;
                return (
                  <li
                    className={`transition-all duration-200 ease-linear ${
                      index + 5 === isActiveState ? "active svg" : "svg"
                    }`}
                    key={`${index}+ ${path}`}
                    onClick={() => {
                      dispatch(activeIcon(index + 5));
                    }}
                  >
                    <Link to={path} title={text}>
                      {icon}
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </nav>
      </header>
      {/* <header className="lg:hidden">
        <MobileNav />
      </header> */}
    </>
  );
};

export default Sidebar;
