import "./App.css";
import Spotlight from "./components/screens/Spotlight";
import BreakFast from "./components/screens/BreakFast";
import Coffee from "./components/screens/Coffee";
import Dinner from "./components/screens/Dinner";
import IceCream from "./components/screens/IceCream";
import Lunch from "./components/screens/Lunch";
import PageNotFound from "./components/screens/PageNotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preload from "./components/Preloader/Preload";

function App() {
  return (
    <>
      <Router>
        <Preload />
        <Routes>
          <Route path="/efood" element={<Spotlight />} />
          <Route path="/" element={<Spotlight />} />
          <Route path="/breakfast" element={<BreakFast />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/icecream" element={<IceCream />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
