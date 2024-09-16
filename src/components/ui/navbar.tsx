"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavbarComponent(props: { brand: { title: string; icon: string; }; buttons: { name: string; href: string }[] }) {
    const BrandElement = (
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {props.brand.icon ? <Image width={40} height={40} src={props.brand.icon} className="w-[40px] h-[40px]" alt="" /> : undefined}
            <span className="font-covesbold self-center text-2xl whitespace-nowrap dark:text-white">{props.brand.title}</span>
        </Link>
    );

    const ButtonsElement = (
        <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            {props.buttons.map((v, i) => (
            <li key={i}>
                <Link href={v.href} className="group relative tracking-widest text-[20px] font-coveslight block py-2 px-3 text-txt-0 rounded md:hover:bg-transparent md:border-0 md:p-0 text-whited">
                    {v.name}
                    <div className="absolute w-full h-0.5 bg-txt-0 scale-x-0 group-hover:scale-x-100 transition-transform" />
                </Link>
            </li>
            ))}
        </ul>
    );

    const [showMe, setShowMe] = useState(true);
    function toggle(){
        setShowMe(!showMe);
    }

    return (
        <nav className={"fixed top-0 left-[2.5%] w-[95%] border-gray-200"+(showMe ? "" : " navbar-glass")}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {BrandElement}
                <button onClick={toggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
                    </svg>
                </button>
                <div className={"w-full md:block md:w-auto"+(showMe ? " hidden" : "")} id="navbar-default">
                    {ButtonsElement}
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;