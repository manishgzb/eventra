import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Navbar from "./ui/navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
