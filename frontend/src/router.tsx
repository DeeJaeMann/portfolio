import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import HomePage from "@/pages/HomePage";
import WingedEscapePage from "./pages/WingedEscapePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "wingedescape",
        element: <WingedEscapePage />,
      },
    ],
  },
]);

export default router;
