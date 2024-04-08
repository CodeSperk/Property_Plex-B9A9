import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";

const routes = [
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
    ]
    
    
  },
]


export default routes;