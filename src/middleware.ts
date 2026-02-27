import { NextRequest, NextResponse } from "next/server";
import logger from "./libs/logger";

export function middleware(request: NextRequest) {
  const { method, url } = request;

  // development環境ではログを出力しない
  if (process.env.NODE_ENV !== "development") {
    logger.info({ date: new Date().toString(), method, url }, "Incoming Request");
  }

  return NextResponse.next();
}

// ログを出力する対象のパスをmatcherで指定
export const config = {
  matcher: "/:path*",
};

