import "./App.css";
import { Cursor } from "./components/Cursor";
import { StarBackground } from "./components/StarBackground";
import { StarBackgroundRandom } from "./components/StarBackgroundRandom";
import { Switch } from "./components/Switch";
import { RotateProvider } from "./Context/RotateContext";
import { MyRouter } from "./Router/MyRouter";

function App() {
  return (
    <>
      <RotateProvider>
        {/* <div id="backgroundContainer">
          <StarBackground></StarBackground>
        </div> */}
        <StarBackgroundRandom />
        <MyRouter />
        <Cursor />
        <Switch />
      </RotateProvider>
    </>
  );
}

export default App;
