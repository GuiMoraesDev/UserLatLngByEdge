import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { geo, destination, ip, credentials, headers } = request;

  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
    geo,
    destination,
    ip,
    credentials,
    headers,
  });
}
