import { MobileNav, Sidebar } from "./components";
import { BrowserRouter } from "react-router-dom";
import ProjectRoutes from "./Routes";
import { useState } from "react";

const App = () => {
  const [displaySearch, setDisplaySearch] = useState(false);
  return (
    <main className="flex relative gap-8 bg-main  p-4 md:p-6 text-3xl w-full text-white font-body min-h-screen">
      <BrowserRouter>
        <Sidebar />
        <section className="w-full lg:w-[calc(100%-4em)]">
          <header className="lg:hidden">
            <MobileNav />
          </header>
          <ProjectRoutes
            displaySearch={displaySearch}
            setDisplaySearch={setDisplaySearch}
          />
        </section>
      </BrowserRouter>
    </main>
  );
};

export default App;
