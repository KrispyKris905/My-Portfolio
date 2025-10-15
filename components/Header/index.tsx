"use client";
import NavBar from "./NavBar"
import Link from "next/link"

export default function Header(props: any){
    return(
        <header>
            <Link href="/">{props.name}</Link>
            <NavBar/>
        </header>
    );
}