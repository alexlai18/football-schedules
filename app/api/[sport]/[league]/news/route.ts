import { fetchLeagueNews } from "@/lib/apiUtility";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sport: string, league: string }>}): Promise<NextResponse>
{
  try {
    const { sport, league } = await params;
    const response: NextResponse = await fetchLeagueNews(sport, league);

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { message: `Error retrieving sports leagues` },
      { status: 500 }
    )
  }
}
