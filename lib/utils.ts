import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const protocol =
  process.env.NODE_ENV === 'production' ? 'https' : 'http';
export const rootDomain =
  process.env.NEXT_PUBLIC_ROOT_DOMAIN || 
  (process.env.NODE_ENV === 'production' ? 'subdoamin-testing-d965.vercel.app' : 'localhost:3000');

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
