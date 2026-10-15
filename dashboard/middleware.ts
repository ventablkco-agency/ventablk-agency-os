import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const expectedPassword = process.env.DASHBOARD_PASSWORD;
  if (!expectedPassword) {
    return new NextResponse("Dashboard password is not configured.", { status: 503 });
  }

  const authorization = request.headers.get("authorization");
  if (authorization?.startsWith("Basic ")) {
    try {
      const decoded = atob(authorization.slice(6));
      const separator = decoded.indexOf(":");
      const password = separator >= 0 ? decoded.slice(separator + 1) : "";
      if (password === expectedPassword) return NextResponse.next();
    } catch {
      // Treat malformed credentials as unauthenticated.
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Ventablk Agency Dashboard", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
