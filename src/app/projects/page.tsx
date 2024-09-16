import Image from "next/image";
import AppComponents from "@/components";
import ProjectCard from "@/components/ui/project-card";
import ProjectCards from "@/components/ui/project-cards";
import CandraProject from "@/lib/candra-project";

async function ProjectsPage() {
    const projects = await CandraProject.getProjects();
    return (
        <div>
            <div className="flex mt-14 ml-[5%] w-[90%] items-center justify-center">
                <hr className="w-full h-0 border-slate-700" />
                <h1 className="p-6 tracking-widest text-3xl font-bold font-covesbold">PROJECTS</h1>
                <hr className="w-full h-0 border-slate-700" />
                <hr className="w-full h-0 border-slate-700" />
                <hr className="w-full h-0 border-slate-700" />
            </div>
            <ProjectCards projects={projects} />
            <AppComponents.Navbar />
            <AppComponents.Footer />
        </div>
    )
}

export default ProjectsPage;