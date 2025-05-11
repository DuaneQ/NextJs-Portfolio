import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import HomeBtn from "../../components/HomeBtn";
import Form from "@/app/components/contact/Form";

export default function Contact() {
  return (
    <>
      <HomeBtn />
      <Image
        src={bg}
        alt="background-img"
        className="w-full h-full top-0 left-0 fixed object-cover object-center opacity-25"
      />

      <article className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="font-bold text-4xl text-accent">Summon the Jedi</h1>
          <p className="text-center font-light text-sm text-foreground">
            I am a software engineer with a passion for building web
            applications and exploring new technologies. I have experience in
            full-stack development, and I enjoy working on projects that
            challenge me to learn and grow.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
