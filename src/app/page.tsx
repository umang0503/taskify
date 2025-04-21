import Information from "@/components/homepage/information";
import Navbar from "@/components/homepage/navbar";
import Newsletter from "@/components/homepage/newletter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Newsletter/>
      <Information/>
    </div>
    
  );
}
