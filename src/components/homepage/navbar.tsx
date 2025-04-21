import { NavigationMenuDemo } from "./navmenu";

export default function Navbar() {
    return(
        <div className="flex flex-row fixed justify-between items-center w-full h-16 bg-background border-b border-solid border-black/[.08] dark:border-white/[.145] px-4 sm:px-5">
            <div className="">
            <img src="logo.svg" alt="Taskify Logo" className="w-30 h-15" />
            </div>
            <div className="">
                <NavigationMenuDemo />
            </div>
            <div className="flex flex-row gap-4">
              
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Log In
                </button>
            </div>
        </div>
    )
}