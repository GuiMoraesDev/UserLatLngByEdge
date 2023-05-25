import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { geo, ip } = request;

  return NextResponse.json({
    hello_message: `Hey, you`,
    presentation: `I'm a edge function created for global domination and I know where you are.`,
    welcome_message: `You are talking from ${geo?.city}, ${geo?.region}, ${geo?.country} and I know your IP is ${ip}`,
    see_you_soon_message: `BTW, that's your location on the map: https://www.google.com/maps/place/${geo?.latitude},${geo?.longitude}`,
  });
}
