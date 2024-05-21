import { type ClassValue, clsx } from "clsx"
import slugify from "slugify"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slug(word: string) {
  return slugify(word, {
    replacement: "-",
    lower: true,
    strict: true,
    trim: true
  })
}

export function isEven(number: number): boolean {
  return number % 2 === 0;
}