import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { geo, ip } = request;
  const city = geo?.city || "Unknown";
  const region = geo?.region || "Unknown";
  const country = geo?.country || "Unknown";
  const latitude = geo?.latitude || "Unknown";
  const longitude = geo?.longitude || "Unknown";

  return NextResponse.json({
    city,
    region,
    country,
    ip,
    latitude,
    longitude,
  });
}
