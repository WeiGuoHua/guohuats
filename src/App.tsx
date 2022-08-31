import View from "./components/View";
import { onRouteBefore } from "./router";

function App() {
  
  onRouteBefore();
  return (<View />);
}
export default App;