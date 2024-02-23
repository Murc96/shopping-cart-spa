import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootElement from "./components/RootElement";
import Home, {loader as homeLoader} from "./components/Home";
import Shop, {
  loader as shopLoader,
} from "./components/Shop";
import ProductDetail from "./components/ProductDetail";
import ShoppingCartPage from "./components/ShoppingCartPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [
        { index: true, element: <Home/>, loader: homeLoader as any},
        {
          path: "/shop",
          element: <Shop />,
          loader: shopLoader as any,
        },
        {
          path:"/products/:productId",
          element:<ProductDetail/>,
        },
      ],
    },
    {
      path: "/cart",
      element:<ShoppingCartPage />
    },
  ]);
  return <RouterProvider router={router} />;
}
