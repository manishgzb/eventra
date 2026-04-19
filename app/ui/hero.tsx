// create a hero component that has a background image, a title, a subtitle, and a search bar in the center of hero to search and explore events. The hero should be responsive and look good on all screen sizes. and use shadcn ui where needed.

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Field } from "@/components/ui/field"
const Hero = () => {
    return (
        <div className="relative h-screen">
            <Image
                src="/pexels-jibarofoto-18482996.jpg"
                alt="Hero background"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">Your Gateway to Unforgettable Experiences</h1>
                    <p className="text-lg text-white mt-4">Find the perfect event for you</p>
                    <div className="mt-8 flex">
                        <Field orientation="horizontal">
                            <div className="relative w-full mx-8">
                                <Input type="search" placeholder="Search..." className="bg-white" />
                                <Button className="absolute right-0.5">Search</Button>
                            </div>
                        </Field>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero