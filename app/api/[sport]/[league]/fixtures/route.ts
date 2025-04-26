import { parseFootballFixtures } from "@/lib/apiDataParsers";
import { fetchSportsFixtures } from "@/lib/apiUtility";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sport: string, league: string }>}): Promise<NextResponse>
{
  try {
    const { sport, league } = await params;
    const response: any = await fetchSportsFixtures(sport, league);
    
    const parsedData = parseFootballFixtures(response);
    return NextResponse.json(parsedData);
  } catch (err: any) {
    return NextResponse.json(
      { message: `Error retrieving sports leagues` },
      { status: 500 }
    )
  }
}

/*
These are the keys what we need from ESPN's fixtures - soccer

  - leagues X
  - season X
  - day X
  - events Y (is a list of objs)
    - id
    - date
    - name
    - shortName
    - season.slug
    - competitions (is a list) - only had 1 for soccer
      - competitors (is a list) - only had 2 for soccer
        - team.displayName
        - team.id
        - team.color
        - team.alternativeColor
        - team.logo
        - team.leaders? maybe - shows goal and assisat leaders of team
      - odds (is a list) - only had 2 for soccer
        - provider.name (the bookie)
        - awayTeamOdds.value
        - homeTeamOdds.value
        - drawOdds.value
    - venue.displayName
    - status.displayClock

*/