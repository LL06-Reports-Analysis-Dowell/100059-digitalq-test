import { Routes, Route } from "react-router-dom";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";
import FifthScreen from "./screens/FirstScreen";
import SevenScreen from "./screens/SevenScreen";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<FirstScreen />} />
      <Route path="/SecondScreen" element={<SecondScreen />} />
      <Route path="/ThirdScreen" element={<ThirdScreen />} />
      <Route path="/FourthScreen" element={<FourthScreen />} />
      <Route path="/FifthScreen" element={<FifthScreen />} />
      <Route path="/SevenScreen" element={<SevenScreen />} />
    </Routes>
  );
}

export default App;
