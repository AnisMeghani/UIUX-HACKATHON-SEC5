"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react"
import Link from "next/link"
import { NavigationMenuDemo } from "./navigationShop"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button>
            <AlignJustify />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="flex justify-center pb-5">Shop.Co</SheetTitle>
              <ul className="">
      <li className="grid grid-cols-1 space-y-5 ">
        <Link href={""} className="text-sm"><NavigationMenuDemo /></Link>
        <Link href={""} className="text-sm ml-4">On Sales </Link>
        <Link href={""} className="text-sm ml-4">New Arrivals </Link>
        <Link href={""} className="text-sm ml-4">Brands</Link>
      </li>
      </ul>
            </SheetHeader>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
