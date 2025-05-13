import ProjectLayout from "@/app/(sub page)/projects/ProjectLayout";

const ProjectList = ({ projects }) => {
    return (
        <div className="w-full max-w-aut xl:max-w-4xl px-4 lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
            {projects.map((project, index) => (
                <ProjectLayout key={index} {...project} />
            ))}
        </div>
    );
}

export default ProjectList