"use client"
import Information from "@/components/homepage/information";
import Navbar from "@/components/homepage/navbar";
import Newsletter from "@/components/homepage/newletter";
import { UserAuthContext } from "./context";
import HomeSite from "./Main/page";

export default function Home() {
  const {user,handleGoogleSignup, handleGoogleSignOut }: any =
      UserAuthContext();
  return (
  user?<HomeSite/>:
    <div>
      <Navbar/>
      <Newsletter/>
      <Information/>
    </div>
    
  );
}
