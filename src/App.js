import { Routes, Route } from "react-router-dom";
import FirstScreen from "./screens/FirstScreen";
import SecondScreen from "./screens/SecondScreen";
import ThirdScreen from "./screens/ThirdScreen";
import FourthScreen from "./screens/FourthScreen";
import FifthScreen from "./screens/FirstScreen";
import SevenScreen from "./screens/SevenScreen";
import NineScreen from "./screens/NineScreen";
import { ElevenScreen } from "./screens/ElevenScreen";
import { TwelveScreen } from "./screens/TwelveScreen";
import { ThirteenScreen } from "./screens/ThirteenScreen";
import { FourteenScreen } from "./screens/FourteenScreen";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<FirstScreen />} />
      <Route path="/SecondScreen" element={<SecondScreen />} />
      <Route path="/ThirdScreen" element={<ThirdScreen />} />
      <Route path="/FourthScreen" element={<FourthScreen />} />
      <Route path="/FifthScreen" element={<FifthScreen />} />
      <Route path="/SevenScreen" element={<SevenScreen />} />
      <Route path="/NineScreen" element={<NineScreen />} />
      <Route path="/ElevenScreen" element={<ElevenScreen />} />
      <Route path="/TwelveScreen" element={<TwelveScreen />} />
      <Route path="/ThirteenScreen" element={<ThirteenScreen />} />
      <Route path="/FourteenScreen" element={<FourteenScreen />} />
    </Routes>
  );
}

export default App;
