import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "../../components/RenderModel";
import HomeBtn from "../../components/HomeBtn";
import { R2Model } from "@/app/components/models/R2";
import AboutDetails from "@/app/components/about";
import useScreenSize from "../../components/hooks/useScreenSize";

export default function Home() {

  return (
    <>
      <HomeBtn />
      <Image
        src={bg}
        alt="background-img"
        className="w-full h-full top-0 left-0 fixed object-cover object-center opacity-25"
      />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <R2Model />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="flex absolute flex-col items-center top-[45%] left-1/2 -translate-y-1-2 -translate-x-1/2">
          <h1 className="font-bold text-4xl xs:text-7xl lg:text-9xl sm:text-8xl text-accent">Duane</h1>
          <p className="font-light text-sm text-foreground">
          Dynamic Tech Leader & Cloud Expert | Spearheading Quality & Innovation in Software Engineering | GCP & Data Integrity Specialist 
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
