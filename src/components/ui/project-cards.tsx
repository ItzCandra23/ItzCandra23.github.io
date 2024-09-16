"use client";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./project-card";

function groupArray(array: any[], size: number) {
    let result = [];
    
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    
    return result;
}

function ProjectCards(props: {
    projects: {
        image: string;
        name?: string;
        href?: string;
        type: string;
    }[];
    className?: string;
    id?: string;
}) {
    let projects = groupArray(props.projects, 3) as {
        image: string;
        name?: string;
        href?: string;
        type: string;
    }[][];

    return (
        <div className={props.className} id={props.id}>
            { projects.map((v, i) => {
                return (
                <div key={i} className="flex flex-wrap justify-center items-center w-[90vw] min-h-[90vh] ml-[5vw]">
                    { i % 2 === 0 ? null : <ProjectCard card="lg" type={v[0].type} src={v[0].image} name={v[0].name} href={v[0].href} /> }
                    { v.length > 1 ? <div className="flex justify-between max-sm:w-full sm:flex-col w-fit h-fit">
                        <ProjectCard card="md" type={v[1].type} src={v[1].image} name={v[1].name} href={v[1].href} />
                        { v[2] ? <ProjectCard card="md" type={v[2].type} src={v[2].image} name={v[2].name} href={v[2].href} /> : null }
                    </div> : null }
                    { i % 2 === 0 ? <ProjectCard card="lg" type={v[0].type} src={v[0].image} name={v[0].name} href={v[0].href} /> : null }
                </div>
                );
            }) }
        </div>
    );
}

export default ProjectCards;