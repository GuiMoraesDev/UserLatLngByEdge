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

  console.log({ ...geo });

  const response = NextResponse.next();

  response.cookies.set("city", city);
  response.cookies.set("region", region);
  response.cookies.set("country", country);
  response.cookies.set("ip", ip);
  response.cookies.set("latitude", latitude);
  response.cookies.set("longitude", longitude);

  return response;
}
