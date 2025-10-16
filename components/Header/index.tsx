"use client";
import NavBar from "./NavBar"
import Link from "next/link"
import { HeaderFooterProps } from "@/lib/types"

export default function Header({ name }: HeaderFooterProps){
    return(
        <header>
            <Link href="/">{name}</Link>
            <NavBar/>
        </header>
    );
}