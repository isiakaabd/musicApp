import { Footer, Sidebar } from "./components";

import ProjectRoutes from "./Routes";

function App() {
  return (
    <div className="flex gap-8 bg-main  p-6 text-3xl w-full text-white font-body min-h-screen  ">
      <Sidebar />
      <ProjectRoutes />
    </div>
  );
}

export default App;
