"use client"
import React from 'react'
import {sidebarLinks} from "@/constants/index"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Sheet, SheetClose } from '@/components/ui/sheet'
const NavLinks = ({isMobileNav = false}: {isMobileNav?: boolean}) => {
    const pathname = usePathname(); 
    const userId = 1;
  return (
    <>
      {sidebarLinks.map((item) =>{
        const isActive = (pathname.includes(item.route) && item.route.length>1) || pathname === item.route;
        if(item.route==="/profile"){
            if(userId) item.route = `${item.route}/${userId}`;
            else return null;
        }
        const LinkComponent = (
    <Link
        href={item.route}
        key={item.label}
        className={cn(
            isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
            "flex items-center justify-start gap-4 bg-transparent p-4"
        )}
    >
        <Image
            src={item.imgURL}
            alt={item.label}
            width={36}
            height={36}
            className={cn({"inverted-colors":!isActive})}
        />
        <p className={cn(
            isActive?"base-bold":"base-medium",
            !isMobileNav && "max-lg:hidden"
            )}>{item.label}</p>
    </Link>
      );
      return isMobileNav? (<SheetClose asChild key={item.route}>
        {LinkComponent}
      </SheetClose>): (<div key={item.route}>{LinkComponent}</div>);
      })}
    </>
  )
}

export default NavLinks
