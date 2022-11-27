import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/routes/routes";
import "react-multi-carousel/lib/styles.css";

function App() {
   return (
      <div className="App font-semibold">
        <RouterProvider router={router}></RouterProvider>
      </div>
   );
}

export default App;
