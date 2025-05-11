import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../components/projects/index";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
import Drone from "../../components/models/Drone";
import HomeBtn from "../../components/HomeBtn";

export default function Home() {
  return (
    <>
    <HomeBtn />
      <Image
        src={bg}
        alt="background-img"
        className="w-full h-full top-0 left-0 fixed object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
        <RenderModel>
          <Drone />
        </RenderModel>
      </div>
    </>
  );
}
