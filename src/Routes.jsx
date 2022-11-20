import { Routes, Route } from "react-router-dom";
import Album from "./pages/Album";
import Collection from "./pages/Collection";
import Home from "./pages/Home";

const ProjectRoutes = () => {
  return (
    <Routes className="mt-5">
      <Route path="/" element={<Home />} />
      <Route path="album" element={<Album />} />
      <Route path="collection" element={<Collection />} />
    </Routes>
  );
};

export default ProjectRoutes;
