import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

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
      {
        path:"/update",
        element:<UpdateProfile></UpdateProfile>
      }
    ]
    
    
  },
]


export default routes;