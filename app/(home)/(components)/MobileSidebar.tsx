
import {
    Sheet,
    SheetContent,

} from "@/components/ui/sheet"
import Link from "next/link"
import React from "react"

export function MobileSidebar({ children }: { children: React.ReactNode }) {
    return (
        <Sheet>
            {children}
            <SheetContent className="bg-white w-1/2 p-2">
                <div className="">
                    <ul className='flex flex-col gap-1 text-[#484848] my-3'>
                        <Link href={'/'}><li>Become a renter</li></Link>
                        <Link href={'/'}><li>Rental deals</li></Link>
                        <Link href={'/'}><li>How it works</li></Link>
                        <Link href={'/'}><li>Why choose us</li></Link>
                    </ul>
                    <div className='flex flex-col gap-2'>
                        <Link href={'/login'} className=''>Login</Link>
                        <div className="flex items-center justify-center">
                            <Link href={'/register'} className='bg-primaryColor text-white px-2 py-1 rounded-md'>Register</Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
