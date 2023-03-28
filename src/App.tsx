import { Provider } from "react-redux";
import store from "./app/store";
import Main from "./components/Main";


function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider> 
  );
}

export default App;
