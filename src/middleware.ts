import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { geo } = request;
  const ip = request.ip || "Unknown";
  const city = geo?.city || "Unknown";
  const region = geo?.region || "Unknown";
  const country = geo?.country || "Unknown";
  const latitude = geo?.latitude || "Unknown";
  const longitude = geo?.longitude || "Unknown";

  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-city", city);
  requestHeaders.set("x-region", region);
  requestHeaders.set("x-country", country);
  requestHeaders.set("x-ip", ip);
  requestHeaders.set("x-latitude", latitude);
  requestHeaders.set("x-longitude", longitude);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
