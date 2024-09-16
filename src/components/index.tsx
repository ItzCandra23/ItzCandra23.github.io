import Link from "next/link";
import NavbarComponent from "./ui/navbar";
import Clock from "./ui/clock";
import ProgressBar from "./ui/progressbar";

namespace AppComponents {

    export function Navbar() {
        const brand = { title: "CandraProject", icon: "/icon.svg" };
    
        const buttons = [
            { name: "Home", href: "/" }, 
            { name: "Projects", href: "/projects" }, 
            { name: "Contact", href: "/#contact" }, 
            { name: "About", href: "/about" }
        ];

        return <NavbarComponent brand={brand} buttons={buttons} />;
    }

    export function Footer() {
        return (
            <footer className="w-full py-5 bg-bg-0">
                <ProgressBar />
                <div className="w-[90%] text-txt-2 flex flex-wrap justify-between items-center m-auto">
                    <div className="pt-3 px-1">
                        <p>Version</p>
                        <div className="font-mono text-txt-0">2022 © Edition</div>
                    </div>
                    <div className="pt-3 px-1">
                        <p>Local Time</p>
                        <Clock showTimeZone={true} className="font-mono text-txt-0" />
                    </div>
                    <div className="pt-3 px-1">
                        <p>Contact</p>
                        <Link href="/contacts" className="uppercase tracking-wider font-noto font-extrabold text-backgroundPrimary rounded-sm bg-txt-1 px-1 transition hover:bg-transparent hover:text-txt-0">Contacts</Link>
                    </div>
                    <div className="pt-3 px-1">
                        <p>Socials</p>
                        <ul className="relative -bottom-[3px] flex space-x-5 transition text-2xl text-txt-0 hover:text-bg-2">
                            <li><Link href="https://www.linkedin.com/in/candra-aja/" className="transition hover:text-txt-0 hover:line"><i className="bx bxl-linkedin" /></Link></li>
                            <li><Link href="https://github.com/ItzCandra23/" className="transition hover:text-txt-0 hover:line"><i className="bx bxl-github" /></Link></li>
                            <li><Link href="https://www.instagram.com/itzcandraa23/" className="transition hover:text-txt-0 hover:line"><i className="bx bxl-instagram" /></Link></li>
                            <li><Link href="https://dribbble.com/ItzCandra23" className="transition hover:text-txt-0 hover:line"><i className="bx bxl-dribbble" /></Link></li>
                            {/* <li><Link href="https://www.youtube.com/@itzcandra23" className="transition hover:text-txt-0 hover:line"><i className="bx bxl-youtube" /></Link></li> */}
                            <li><Link href="https://discord.com/users/822266948607148042" className="transition hover:text-txt-0 hover:line"><i className="bx bxl-discord-alt" /></Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default AppComponents;