import { fetchSpecificTeamData } from "@/lib/apiUtility";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ sport: string, league: string, teamId: string }>}): Promise<NextResponse>
{
  try {
    const { sport, league, teamId } = await params;
    const enableRoster = request.nextUrl.searchParams.get("enableRoster");
    const response: NextResponse = await fetchSpecificTeamData(sport, league, teamId, enableRoster);

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { message: `Error retrieving sports leagues` },
      { status: 500 }
    )
  }
}
