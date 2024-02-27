import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDistance } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });
}

export function formatNumber(num: number) {
  if (num.toString().includes(".")) {
    // Use toFixed(1) to round and format to string with one decimal place.
    return num.toFixed(1);
  }
  // If not, simply return the number as is.
  return num;
}
