import axios from "axios";

export interface Project {
    name?: string;
    type: string;
    image: string;
    href?: string;
}

namespace CandraProject {

    export async function getProjects(): Promise<Project[]> {
        const url = "https://raw.githubusercontent.com/ItzCandra23/ItzCandra23/main/projects.json";
        let projects: Project[] = [];

        const res = await axios.get(url);

        if (res.data) projects = (res.data);

        return projects;
    }
}

export default CandraProject;