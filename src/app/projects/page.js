import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import ProjectList from "../components/projects/index";
import { projectsData } from "../data";
import RenderModel from "../components/RenderModel";
import Staff from "../components/models/Staff";
import Drone from "../components/models/Drone";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-img"
        fill
        className="w-full h-full object-cover object-center opacity-25"
      />
      <ProjectList projects={projectsData} />

        <div className="flex items-center justify-center fixed top-20 left-0 h-screen">
      <RenderModel>
        <Drone />
      </RenderModel>
        </div>
    </main>
  );
}
