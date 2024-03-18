import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import CardTest from "../Pages/CardTest/CardTest";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/service',
          element:<CardTest></CardTest>
        }
      ]
    },
  ]);
  

export default router;