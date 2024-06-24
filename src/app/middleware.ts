// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware will run for every request to the application.
export function middleware(request: NextRequest) {
  // Extract the pathname from the request URL
  const { pathname } = request.nextUrl;

  // Define the paths that should trigger a redirect to the login page
  const protectedPaths = ['/', '/app'];

  // Check if the requested path is in the list of protected paths
  if (protectedPaths.includes(pathname)) {
    // Redirect to the login page
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Allow the request to continue if the path is not protected
  return NextResponse.next();
}

// Define the paths where the middleware should run
export const config = {
  matcher: ['/', '/app'],
};
