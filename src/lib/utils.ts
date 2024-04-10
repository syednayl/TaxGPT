import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export function convertToAscii(inputString: string) {
//   // remove non ascii characters
//   const asciiString = inputString.replace(/[^\x00-\x7F]+/g, '')
//   return asciiString
// }

export const convertToAscii = (str: string) => {
  // return str.replace(/[^\x00-\x7F]/g, ""); // Replace non-ASCII characters with empty string
  return str.replace(/[^\x00-\x7F]/g, '').replace(/\s+/g, '_')
}
