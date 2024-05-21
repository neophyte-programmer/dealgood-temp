"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import { NAVLINKS } from "@/lib/navlinks"

export default function DefaultNav() {
    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {
                    NAVLINKS.map((item) => (
                        <NavigationMenuItem className="bg-transparent" key={item.href}>
                            {
                                !!item.dropdown ? <>
                                    <NavigationMenuTrigger className="hover:bg-soil-200" >{item.label}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[300px] gap-2 p-2 md:w-[300px]  ">
                                            {item.dropdown.map((component) => (
                                                <ListItem
                                                    key={component.href}
                                                    title={component.label}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </> : <Link href={item.href} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {item.label}
                                    </NavigationMenuLink>
                                </Link>
                            }
                        </NavigationMenuItem>
                    ))
                }
            </NavigationMenuList>
        </NavigationMenu>
    )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    className?: string;
    title: string;
    icon?: React.ReactNode; // Icon prop of type React.ReactNode
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-base flex items-center font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-[#6A6A6A]">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"