import { Footer, Sidebar } from "./components";
import { BrowserRouter } from "react-router-dom";
import ProjectRoutes from "./Routes";

function App() {
  return (
    <div className="flex gap-8 bg-main  p-6 text-3xl w-full text-white font-body min-h-screen  ">
      <BrowserRouter>
        <Sidebar />
        <ProjectRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
