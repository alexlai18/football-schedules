import { fetchSportsFixtures } from "@/lib/apiUtility";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sport: string, league: string }>}): Promise<NextResponse>
{
  try {
    const { sport, league } = await params;
    const response: NextResponse = await fetchSportsFixtures(sport, league);

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { message: `Error retrieving sports leagues` },
      { status: 500 }
    )
  }
}
