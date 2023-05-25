import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { geo } = req;
  const lat = geo?.latitude;
  const lng = geo?.longitude;

  console.log({ lat, lng });

  return null;
}
