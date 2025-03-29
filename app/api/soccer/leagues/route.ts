import { SPORTS_API_BASE_URL, getHeaders } from "@/lib/apiConfig";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await fetch(`${SPORTS_API_BASE_URL}/leagues/dropdown?sport=soccer`, {
    method: "GET",
    headers: getHeaders(),
  });
  console.log(`${SPORTS_API_BASE_URL}/leagues/dropdown?sport=soccer`)

  if (!response.ok) throw new Error("Failed to fetch soccer leagues");
  const data = await response.json();
  return NextResponse.json(data);
}

