import { element } from "prop-types";
import PrivateRout from "../hooks/PrivateRout";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import EstateDetails from "../pages/EstateDetails/EstateDetails";

const routes = [
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch("/speciality_estates.json")
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/update",
        element:<PrivateRout> <UpdateProfile></UpdateProfile> </PrivateRout>,
      },
      {
        path:"/estate/:id",
        element:<PrivateRout> <EstateDetails></EstateDetails> </PrivateRout>,
        loader: (props) => fetch("/speciality_estates.json")
      }
    ]
    
    
  },
]


export default routes;