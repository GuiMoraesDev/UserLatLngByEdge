import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export const config = {
  runtime: "edge",
};

export function GET(request: NextRequest) {
  const headersList = headers();

  const referer = headersList.get("referer");
  const requestHeader = headersList.get("request");
  const url = headersList.get("url");

  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
    referer,
    requestHeader,
    url,
  });
}
