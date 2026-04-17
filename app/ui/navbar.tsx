'use client'
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">Eventra</h1>
        <div className="flex items-center justify-between h-16">
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
        </div>
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Image src="/hamburger.png" height={24} width={24} alt="hamburger menu" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/events">Browse Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/help">Help</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/signin">
                    <Button>Sign In</Button>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>

  )
}
export default Navbar