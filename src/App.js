import MainNavbar from "./components/MainNavbar/MainNavbar";
import "./App.css";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import ProductDetails from "./components/Pages/ProductDetails";
import CreateReview from "./components/Pages/CreateReview";
import Guides from "./components/Pages/Guides";
import Guide from "./components/Pages/Guide";
import CreateGuide from "./components/Pages/CreateGuide";

function App() {
  return (
    <HashRouter>
      <div>
        <MainNavbar />

        <Routes>
          <Route path="/SEG3125-Project2-Step3/" element={<Home />} />
          <Route
            path="/SEG3125-Project2-Step3/shop/:section"
            element={<Shop />}
          />
          <Route
            path="/SEG3125-Project2-Step3/shop/details/:id"
            element={<ProductDetails />}
          />
          <Route
            path="/SEG3125-Project2-Step3/shop/details/review/:id"
            element={<CreateReview />}
          />
          <Route path="/SEG3125-Project2-Step3/guides" element={<Guides />} />
          <Route
            path="/SEG3125-Project2-Step3/guides/guide/:id"
            element={<Guide />}
          />
          <Route
            path="/SEG3125-Project2-Step3/guides/create"
            element={<CreateGuide />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
