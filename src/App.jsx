import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/component/Navbar";
import { AppKitProvider } from "./config/AppKitProvider";
function App() {
  return (
    <AppKitProvider>
      <BrowserRouter>
        <div className="relative bg-black h-screen font-fredoka overflow-hidden ">
          <div className="flex flex-col h-full overflow-y-auto">
            <Navbar />
            <div className=" max-w-7xl mx-auto grow pb-45">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </AppKitProvider>
  );
}

export default App;
