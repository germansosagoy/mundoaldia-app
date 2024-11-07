import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const reqUrl = new URL(req.url);
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const isLoginPage = ["/sign-in", "/sign-up"].includes(reqUrl.pathname);
  const isPublicPage = ["/"].includes(reqUrl.pathname);

  const {data: { session }} = await supabase.auth.getSession();

  if (isLoginPage && session) {
    return NextResponse.redirect(reqUrl.origin);
  } else if (!session && !isLoginPage && !isPublicPage) {
    return NextResponse.redirect(`${reqUrl.origin}/sign-in`);
  }

  return res;
}

export const config = {
  matcher: ["/((?!api|images|icons|_next/static|_next/image|favicon.ico).*)"],
};
