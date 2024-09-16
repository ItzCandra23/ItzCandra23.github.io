import Link from "next/link";
import AbstractComponent from "@/components/ui/abstract";
import AppComponents from "@/components";
import ProjectCard from "@/components/ui/project-card";
import CandraProject from "@/lib/candra-project";

async function HomePage() {
    return (
        <div>
            <div className="bg-gradient-to-br from-bg-2 to-bg-1 w-full min-h-screen flex flex-wrap items-center mx-auto">
                <div className="absolute overflow-hidden w-[100%] h-[100%]">
                    <div className="absolute right-48 top-[-20vh] w-[15vw] h-[150vh] bg-txt-2 opacity-5 rotate-[26deg]"></div>
                    <div className="absolute -left-20 top-1/3 w-[35vh] h-[20vh] bg-txt-2 opacity-[0.03] -rotate-[15deg]"></div>
                    <div className="absolute -right-10 -bottom-10 w-[13vw] h-[30vh] bg-txt-2 opacity-[0.04] rotate-[15deg]"></div>
                </div>
                <div className="w-full max-w-[90%] flex flex-wrap items-center justify-between mx-auto z-0">
                    <div className="order-last w-full md:order-none md:max-w-[60%] pb-20 md:pb-0">
                        <h1 className="font-light text-txt-0 text-2xl sm:text-4xl leading-tight tracking-[0.3em]">HI, Im Candra.<br />Full-Stack Developer</h1>
                        <hr className="w-36 my-5 border-txt-2" />
                        <p className="font-mono max-w-[90%] text-txt-1 text-sm sm:text-base md:max-w-[70%]">I am a <span className="text-indigo-400">Freelance Programmer</span>, focused on <span className="text-txt-0">Fullstack, Frontend and Backend development</span>. Im also a <span className="text-txt-0">Native App Developer and UI/UX Designer</span></p>
                        <div className="max-[320px]:ml-0 mt-5 ml-1 sm:ml-7">
                            <Link href="/projects" className="transition ease-in-out bg-opacity-60 bg-bg-0 hover:bg-txt-1 text-txt-1 hover:text-bg-0 hover:text-opacity-80 rounded-lg max-[320px]:mx-1 mx-2 max-[320px]:px-3 px-4 sm:px-6 py-2 text-base font-semibold tracking-widest">Projects</Link>
                            <Link href="/#contact" className="transition ease-in-out border-opacity-80 border-2 hover:bg-bg-2 border-txt-1 text-txt-1 rounded-lg max-[320px]:mx-1 mx-2 max-[320px]:px-2 px-3 sm:px-5 py-1 text-base font-semibold tracking-widest">Contacts</Link>
                        </div>
                    </div>
                    <AbstractComponent className="order-first md:order-none pt-5 md:pt-0 my-12 md:my-0 mx-auto md:mx-0 px-12 w-64 h-fit md:w-[40%] max-w-max" />
                </div>
            </div>
            <div id="projects" className="bg-bg-0 w-full min-h-64 pb-5 mx-auto">
                <div className="w-[90%] flex items-center m-auto py-2 sm:py-3">
                    <hr className="w-full h-0 border-txt-0" />
                    <h2 className="uppercase font-covesbold text-xl sm:text-[28px] tracking-wider sm:tracking-[5px] mx-2 sm:mx-3 text-txt-0 whitespace-nowrap">My Projects</h2>
                    <hr className="w-full h-0 border-txt-0" />
                </div>
                <div className="w-[90%] mx-auto flex justify-center flex-wrap">
                    { (await CandraProject.getProjects()).slice(0, 4).map((v, i) => <ProjectCard key={i} type={v.type} card="sm" href={v.href} name={v.name} src={v.image} />) }
                </div>
            </div>
            <div id="contact" className="bg-bg-0 flex w-full justify-center items-center">
                <div className="w-full max-w-4xl m-10 max-[425px]:mx-4">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="min-w-fit flex flex-wrap justify-center font-noto tracking-wider text-4xl max-[425px]:text-2xl max-md:text-xl max-[920px]:text-3xl items-center text-txt-0 mx-2"><AbstractComponent className="w-16 h-24 md:w-28 md:h-32 stroke-2 mr-5" /><h1 className="my-2">Let’s work with Me<br />Make a nice project</h1></div>
                        <h1 className="font-mono tracking-widest text-6xl max-[425px]:text-4xl max-md:text-2xl max-[920px]:text-4xl text-txt-0 mx-2">Together</h1>
                    </div>
                    <div className="w-full flex items-center m-auto py-4 sm:py-3">
                        <hr className="w-full h-0 border-slate-700" />
                        <hr className="w-full h-0 border-slate-700" />
                        <hr className="w-full h-0 border-slate-700" />
                        <hr className="w-full h-0 border-slate-700" />
                        <Link href="/#contacts" className="mx-3 uppercase font-covesbold text-sm md:text-xl tracking-wider transition bg-txt-2 hover:bg-opacity-30 hover:text-txt-0 text-backgroundPrimary px-3 py-1">Contacts</Link>
                        <hr className="w-full h-0 border-slate-700" />
                    </div>
                    <ul className="flex flex-wrap list-none max-[425px]:justify-center">
                        <li className="m-3"><Link href="mailto:me.itzcandra23@gmail.com" className="text-sm md:text-lg py-2 px-3 md:py-3 md:px-4 text-txt-2 border border-txt-2 rounded-full transition hover:text-txt-0 hover:border-txt-0">me.itzcandra23@gmail.com</Link></li>
                        <li className="m-3"><Link href="tel:+6283820587900" className="text-sm md:text-lg py-2 px-3 md:py-3 md:px-4 text-txt-2 border border-txt-2 rounded-full transition hover:text-txt-0 hover:border-txt-0">+62 838 2058 7900</Link></li>
                    </ul>
                </div>
            </div>
            <AppComponents.Navbar />
            <AppComponents.Footer />
        </div>
    );
}

export default HomePage;
