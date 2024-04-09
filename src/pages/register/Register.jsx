import { Link, useNavigate } from "react-router-dom";
import Button1 from "../../components/Buttons/Button1";
import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import "animate.css";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, logOutUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSuccess = (icon = "", title = "", text = "") => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      showClass: {
        popup: ` 
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain an uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain an lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        // To update user name and photo  url
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then()
          .catch((error) => {
            alert(error.code);
          });

        // To reset the form
        form.reset();

        //To display success message
        handleSuccess("success", "Registration Successful");

        //To prevent auto login after registration
        logOutUser()
          .then()
          .catch((error) => {
            console.log(error.code);
          });
          navigate("/login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          handleSuccess("error", "Oops!", "Already Registered. Please Login");
          navigate("/login");
        }
      });
  };

  return (
    <div className="bg-[var(--bg-primary)] min-h-screen flex items-center justify-center">
      <div className="md:w-2/3 lg:1/2 max-w-xl mx-auto px-3 md:px-8 lg:px-12 xl:px-16 mt-28 mb-8">
        {/* Welcome section */}
        <div className="bg-[#4a435f] relative  shadow-xl rounded-t-2xl">
          <img
            src="https://i.ibb.co/X7y8Gwf/Register2.png"
            alt=""
            className="mix-blend-overlay h-full overflow-hidden rounded-t-2xl"
          />
        </div>

        {/* form section */}
        <div className="bg-white px-8 pb-8 w-full items-center py-6 rounded-md">
          <form className="w-full" onSubmit={handleLogin}>
            <h2 className="mt-8 mb-6">Please Register</h2>

            <div className="relative w-full z-0 mb-6 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter Your Name
              </label>
            </div>

            <div className="relative w-full z-0 mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter Your Email
              </label>
            </div>

            <div className="relative w-full z-0 mb-6 group">
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter Url of your Photo
              </label>
            </div>

            <div className="relative w-full z-0 mb-6 group">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                placeholder=" "
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-3 right-2 text-xl text-[var(--clr-accent)] cursor-pointer"
              >
                {showPass ? (
                  <BsEyeSlashFill></BsEyeSlashFill>
                ) : (
                  <BsEyeFill></BsEyeFill>
                )}
              </span>
              <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Enter Your Password
              </label>
            </div>
            <p className="text-red-500 text-center">{error}</p>
            <Button1 btnLink="Register" classes="w-full py-2 mt-4"></Button1>

            <div className="text-sm font-medium w-full text-center mt-4 py-4">
              Have an Account?{" "}
              <Link
                to="/login"
                className="text-[var(--clr-accent)]  hover:text-[var(--clr-primary)] font-bold underline"
              >
                Login Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
