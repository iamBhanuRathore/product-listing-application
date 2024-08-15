import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isJson(input: any) {
  try {
    if (typeof input === "string") {
      JSON.parse(input);
    } else {
      JSON.stringify(input);
    }
    return true;
  } catch (e) {
    return false;
  }
}
