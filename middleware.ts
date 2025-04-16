import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the response
  const response = NextResponse.next();
  
  // Remove any existing x-robots-tag header that might be set to noindex, nofollow
  response.headers.delete('x-robots-tag');
  
  // Set the correct robots header to allow indexing
  response.headers.set('x-robots-tag', 'index, follow');
  
  return response;
}

// This will run the middleware on all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
