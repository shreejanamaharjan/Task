import { useState } from "react";
import AsideBlock from "./AsideBlock";
import SignInForm from "./SignIn";
import SignUp from "./SignUp";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="relative w-full max-w-4xl h-[600px] bg-gray-100 shadow-lg font-sans overflow-hidden flex">
        {/* Main Section */}
        <div className="w-3/5 bg-white flex flex-col items-center justify-center p-8">
          {isSignIn ? <SignInForm /> : <SignUp />}
        </div>

        {/* Aside Section */}
        <div className="w-2/5 bg-gray-500 flex flex-col items-center justify-center p-8">
          <AsideBlock
            title={isSignIn ? "New User?" : "Already a User?"}
            buttonText={isSignIn ? "Sign Up" : "Sign In"}
            onClick={() => setIsSignIn(!isSignIn)}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
