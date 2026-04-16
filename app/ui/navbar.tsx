'use client'
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="md:pt-2 md:pb-2 md:pr-6 md:pl-6 p-4 flex justify-between items-center border">
      <h1 className="md:text-2xl text-3xl text-primary">Eventra</h1>
      <div className="hidden sm:flex justify-between">
        <Link href="/events">
          <Button variant="link">Browse Events</Button>
        </Link>
        <Link href='/help'>
          <Button variant='link'>Help</Button>
        </Link>
        <Link href='signin'>
          <Button>Sign In</Button>
        </Link>
      </div>
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image src='/hamburger.png' height={40} width={40} alt="hamburger menu" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem><Link href='events'>Browse Events</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href='events'>Help</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href='events'><Button variant='default' size='lg'>Sign in</Button></Link></DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
export default Navbar