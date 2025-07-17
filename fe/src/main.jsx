
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import Product from "./components/product/product.jsx"; 

const router = createBrowserRouter([
    {
        path: "/",
    element:
      <App />,
    children: [
         {
        path: "/products",
        element: <Product />,
      }]
    }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
);