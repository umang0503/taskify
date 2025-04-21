import Information from "@/components/homepage/information";
import Navbar from "@/components/homepage/navbar";
import Newsletter from "@/components/homepage/newletter";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Newsletter/>
      <Information/>
    </div>
    
  );
}
