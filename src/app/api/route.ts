import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { geo } = request;

  const lat = geo?.latitude;
  const lng = geo?.longitude;

  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function!`,
    geo,
    lat,
    lng,
  });
}
