import Link from "next/link";
import Image from "next/image";

function FooterComponent(props: { icon: string; categories: { category: string; buttons: { name: string; href: string; }[]; }[]; }) {
    return (
        <footer className="w-full bg-bg-0"></footer>
    );
}

export default FooterComponent;