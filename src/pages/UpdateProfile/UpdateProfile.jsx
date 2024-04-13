import Button1 from "../../components/Buttons/Button1";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import 'animate.css';
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const {user, updateUser} = useContext(AuthContext);
  // console.log(user);
  const [name, setName] = useState(user?.displayName  || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "");
  const navigate = useNavigate();


  const handleSuccess = (icon="", title) => {
    Swal.fire({
      icon: icon,
      title: title,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }


  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(name, photoUrl)
    .then(()=>{
      console.log("profile updated");
      handleSuccess("success", "Updated successfully");
      navigate("/");      
    })
    .catch(error=>{
      console.log(error)
    });
    
  }

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen flex items-center justify-center">
      <Helmet>
        <title>PropertyPlex | Update </title>
      </Helmet>

    <div className="w-full md:w-2/3 lg:1/2 max-w-xl mx-auto px-3 md:px-8 lg:px-12 xl:px-16 mt-28 mb-8">
      {/* form section */}
      <div className="bg-white p-10 pt-12 w-full max-w-lg items-center rounded-lg">
        <form className="w-full space-y-6" onSubmit={handleUpdate}>
          <h3 className="mb-8 text-center">Update  Your Profile</h3>
{/* name field */}
          <div className="w-full group">
            <label className="text-sm text-[var(--clr-secondary)]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block py-2 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)]"
            />
          </div>

{/* email field */}
          <div className="w-full group">
            <label className="text-sm text-[var(--clr-secondary)]">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={user?.email}
              readOnly
              className="block py-2 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)]"
            />
          </div>

{/* Photo Url field */}
          <div className="w-full group">
            <label className="text-sm text-[var(--clr-secondary)]">
              Your Photo Link
            </label>
            <input
              type="text"
              name="photoUrl"
              id="photoUrl"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="block py-2 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)]"
            />
          </div>        
         
            <Button1 btnLink="Update" classes="w-full py-2 mt-4"></Button1>
        </form>
      </div>
    </div>
  </div>
    
  
  );
};

export default UpdateProfile;