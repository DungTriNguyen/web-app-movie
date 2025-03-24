import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumber = (number: number, minimumFractionDigits: number = 2, maximumFractionDigits: number = 2) => {
  return number.toLocaleString('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  })
}

export const IS_BROWSER = typeof window !== 'undefined';