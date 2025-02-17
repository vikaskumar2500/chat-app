import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Signup from "./routes/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="flex items-center justify-center w-full min-h-screen">Home page</div>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
