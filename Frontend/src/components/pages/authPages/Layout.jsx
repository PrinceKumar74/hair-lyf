import { Outlet } from "react-router-dom";
import authImg from "../../../../public/auth/auth.jpg";

function AuthLayout() {
  return (
    <div className="flex h-[100vh] w-full">
      {/* login and register page will render here */}
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>

      {/* auth image with text overlay */}
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 relative">
        <img 
          src={authImg} 
          alt="Auth Image" 
          className="w-full h-full object-cover border-2 "
        />
        {/* Text overlay container */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white flex flex-col items-center justify-center">
        <div className="">
          <h2 className="text-3xl font-bold mb-2 flex flex-col items-center">Easy-to-Use hair-styles for
            <span>Managing your day</span>
          </h2>
          <p className="text-orange-400 text-center">
            Lorem ipsum dolor sit amet consectetur adipiscing alimnatis si<br/>
            phaseius mollit sit aliquam sit nullam nere.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
