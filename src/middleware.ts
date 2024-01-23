// import { isAuthenticated } from "@/Utils/Auth";
import { useAppSelector } from "@/redux/hooks";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const protectedRoutes = ["/product"];


export default function Middleware(req: NextRequest) {
  // const auth = useAppSelector((state) => state.auth).isLogin;
  const auth = false;
  console.log('a');
  if (!auth && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/auth", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}