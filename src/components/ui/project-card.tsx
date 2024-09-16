"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function ProjectCard(props: {
    src: string;
    type: string;
    name?: string;
    href?: string;
    card?: "sm"|"md"|"lg";
}) {
    const [isZoom, setZoom] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        },
        {
            threshold: 0.1,
        });

        if (elementRef.current) observer.observe(elementRef.current);

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className="relative max-sm:m-0 max-md:m-2 m-5 p-2 transition hover:bg-bg-1 bg-opacity-50">
            { isVisible ? (
                <div onClick={() => setZoom(true)} className="relative overflow-clip w-fit group">
                    <Image alt={props.name ?? ""} className={(props.card === "lg" ? "w-[500px] h-[625px] max-lg:w-[300px] max-lg:h-[375px] max-sm:w-full max-sm:h-full" : props.card === "md" ? "w-[300px] h-[375px] max-lg:w-[200px] max-lg:h-[250px] max-sm:w-[140px] max-sm:h-[175px]" : "w-[200px] h-[250px] max-sm:w-[100px] max-sm:h-[125px]") + " object-cover"} src={props.src} width={1080} height={1350} quality={100} priority />
                    <div className="absolute max-w-full max-h-10 w-full h-full pt-1 pl-3 font-mono text-lg bottom-0 opacity-0 group-hover:bottom-0 bg-bg-2 bg-opacity-50 group-hover:opacity-100 transition-opacity">{props.type}</div>
                </div>
            ) : null }
            {isZoom ? <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-bg-0 bg-opacity-40 z-[999] flex justify-center items-center">
                <div onClick={() => setZoom(false)} className="fixed top-0 left-0 w-[100vw] h-[100vh] -z-10"></div>
                <nav className="relative flex max-h-[80%] max-w-[80%]">
                    <Image className="max-w-[80vw] max-h-[80vh] w-fit h-fit object-contain" alt={props.name ?? ""} src={props.src} width={1080} height={1350} quality={100} priority />
                    <div className="absolute flex justify-between top-0 w-full bg-bg-0 bg-opacity-80">
                        {props.name ? <div className="mx-10 my-3 font-coveslight tracking-widest font-bold max-sm:text-sm max-sm:mx-2">{props.name}</div> : null}
                        <div className="mx-10 my-3 font-coveslight tracking-widest font-bold max-sm:text-sm max-sm:mx-2">{props.type}</div>
                    </div>
                    <div className="target:hover:bg-txt-0 absolute flex bottom-0 w-full bg-bg-0 bg-opacity-80">
                        {props.href ? <Link className="target font-mono mx-10 my-2 text-txt-2 hover:underline hover:text-txt-0 transition" href={props.href} target="_blank"><i className='bx bx-folder-plus relative -bottom-[2px] mr-2'></i>Open Image Source</Link> : null}
                    </div>
                </nav>
            </div> : null}
        </div>
    );
}

export default ProjectCard;