import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/Menu/Menu";
import Cart from "./features/Cart/Cart";
import CreatOrder from "./features/Order/CreateOrder";
import Order from "./features/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreatOrder />,
  },
  {
    path: "/order/:orderId",
    element: <Order />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
