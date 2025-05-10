"use client";
import { UserAuthContext } from "../../app/context"; 
import { useRouter } from "next/navigation";
export default function SignUpPage() {
    const router = useRouter();

  const {user,handleGoogleSignup, handleGoogleSignOut }: any =
    UserAuthContext();

  const handleGoogleLogin = async () => {
    await handleGoogleSignup();
    if (user) {
        router.push("/Main");
      }
  };
  const handleGoogleLogout = async () => {
    await handleGoogleSignOut();
  }
    return (
      <div
        className="min-h-screen bg-white 
      flex flex-col bg-gray-100 relative"
      >
        {/* Logo at Top-Left */}
        <div className="p-4">
          <img src="/logo.svg" alt="Taskify Logo" className="w-32 h-auto" />
        </div>

        {/* Centered Signup Form */}
        <div className="flex flex-1 justify-center m-32 ">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">
                Sign Up
              </button>
              <div className="text-center">or</div>
              <button
                onClick={handleGoogleLogin}
                className="bg-white border-4 border-indigo-500/100 hover:bg-blue-600 text-black font-semibold py-2 rounded-md transition duration-300"
              >
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google Logo"
                    width="20"
                    height="20"
                  />

                  <span>Continue with Google</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

