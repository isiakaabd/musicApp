import { BrowserRouter, Routes, Route } from "react-router-dom";
import Album from "./pages/Album";
import Collection from "./pages/Collection";
import Home from "./pages/Home";

const ProjectRoutes = () => {
  return (
    <main className="w-full lg:w-[calc(100%-4em)]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="album" element={<Album />} />
          <Route path="collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default ProjectRoutes;
