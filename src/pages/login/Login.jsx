import { FcGoogle } from 'react-icons/fc';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button1 from "../../components/Buttons/Button1";
import { FaGithub } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import 'animate.css';



const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { user, loginUser, googleLogin, githubLogin} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);


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

// Login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if(!email.endsWith(".com")){
      setErrorMessage("Invalid Email");
      return;
    }

    loginUser(email,password)
    .then(result=> {
      // clear the form alfet login
      form.reset();

      //to display success message
        handleSuccess("success", "Login Successful");

      //navigate to login page
      navigate(location.state? location.state : "/");
    })
    .catch(error=>{
      if(error.code === "auth/invalid-credential"){
        setErrorMessage("Invalid email/password.")
      }
    })
  }

// Login with google
  const handleGoogleLogin = () => {
    !user && googleLogin().then(()=> {
      handleSuccess("success", "Login Success");
      navigate(location.state? location.state : "/");
    }).catch(error=>console.log(error.code));
  }
// Login with Github
  const handleGitHubLogin = () => {
    !user && githubLogin().then(()=> {
      handleSuccess("success", "Login Success");
      navigate(location.state? location.state : "/");
    }).catch(error=>console.log(error.code));
  }
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
              <h2 className="mt-8 mb-6">
                Please Login
              </h2>
                         

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
                  type={showPass? "text" :"password"}
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[var(--clr-accent)] peer"
                  placeholder=" "
                  required
                />
            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-2 text-xl text-[var(--clr-accent)] cursor-pointer">
              {
                showPass? <BsEyeSlashFill></BsEyeSlashFill> : <BsEyeFill></BsEyeFill>
              }
            </span>
                <label className="peer-focus:font-medium absolute text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] -z-10 peer-focus:left-0 peer-focus:text-[var(--clr-accent)]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Enter Your Password
                </label>
              </div>

              <p className='text-red-500 text-center'>{errorMessage}</p>
                
                <Button1  btnLink="Login" classes="w-full py-2 mt-4"></Button1>
        

                <div className="text-sm font-medium w-full text-center mt-4 py-4">
                  Not a Member? <Link
                    to="/register"
                    className="text-[var(--clr-accent)]  hover:text-[var(--clr-primary)] font-bold underline"
                  >
                     Register Now
                  </Link>
                </div>            
            </form>

            <div
                  className="w-full mx-auto rounded  font-semibold text-center gap-4"
                >
                 <div className='flex justify-between gap-4 mt-2 '>
                 <FcGoogle className="ml-2 text-4xl border-2 border-[var(--clr-accent)] p-1 h-10 cursor-pointer bg-[var(--bg-secondary)] w-1/2 hover:bg-[var(--clr-accent)] rounded" onClick={handleGoogleLogin}/> 
                  <FaGithub className="ml-2 text-4xl border-2 border-[var(--clr-accent)] p-1 h-10 cursor-pointer bg-[var(--bg-secondary)] w-1/2 hover:bg-[var(--clr-accent)] rounded" onClick={handleGitHubLogin}/>
                 </div>
                  
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;