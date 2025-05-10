import Image from "next/image";
import bg from "../../public/background/home-background.png"; // Import your background image
import RenderModel from "./components/RenderModel";
import C3PO from './components/models/C3PO';
import Navigation from "./components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-img" fill className="w-full h-full object-cover object-center opacity-25" />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <C3PO />
          </RenderModel> 
        </div>
    </main>
  );
}
