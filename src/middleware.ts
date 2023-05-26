import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { geo } = request;
  const ip = request.ip || "Unknown";
  const city = geo?.city || "Unknown";
  const region = geo?.region || "Unknown";
  const country = geo?.country || "Unknown";
  const latitude = geo?.latitude || "Unknown";
  const longitude = geo?.longitude || "Unknown";

  const requestHeaders = new Headers(request.headers);

  console.log({
    ip,
    city,
    region,
    country,
    latitude,
    longitude,
  });

  requestHeaders.set("city", city);
  requestHeaders.set("region", region);
  requestHeaders.set("country", country);
  requestHeaders.set("ip", ip);
  requestHeaders.set("latitude", latitude);
  requestHeaders.set("longitude", longitude);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
