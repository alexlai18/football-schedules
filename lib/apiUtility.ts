import { getHeaders, SPORTS_API_BASE_URL } from "@/lib/apiConfig";
import { NextResponse } from "next/server";

export async function fetchSportLeagues(sport: string): Promise<NextResponse> {
  const response = await fetch(`${SPORTS_API_BASE_URL}/leagues/dropdown?sport=${sport}`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to fetch ${sport} leagues from ESPN Server` },
      { status: response.status }
    )
  }
  const data = await response.json();
  return NextResponse.json(data);
}

export async function fetchSportsFixtures(sport: string, league: string): Promise<NextResponse> {
  const response = await fetch(`${SPORTS_API_BASE_URL}/sports/${sport}/${league}/scoreboard`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to fetch fixtures from ${league} league under ${sport} from ESPN Server` },
      { status: response.status }
    )
  }
  const data = await response.json();
  return NextResponse.json(data);
}

export async function fetchTeamsInLeague(sport: string, league: string): Promise<NextResponse> {
  const response = await fetch(`${SPORTS_API_BASE_URL}/sports/${sport}/${league}/teams`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to fetch list of teams from ${league} league under ${sport} from ESPN Server` },
      { status: response.status }
    )
  }
  const data = await response.json();
  return NextResponse.json(data);
}

export async function fetchSpecificTeamData(sport: string, league: string, teamId: string, enableRoster: string | null): Promise<NextResponse> {
  const response = await fetch(`${SPORTS_API_BASE_URL}/sports/${sport}/${league}/teams/${teamId}${enableRoster ? "?enable=roster" : ""}`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to fetch list of teams from ${league} league under ${sport} from ESPN Server` },
      { status: response.status }
    )
  }
  const data = await response.json();
  return NextResponse.json(data);
}

export async function fetchSpecificTeamFixtures(sport: string, league: string, teamId: string): Promise<NextResponse> {
  const response = await fetch(`${SPORTS_API_BASE_URL}/sports/${sport}/${league}/teams/${teamId}/schedule`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to fetch list of teams from ${league} league under ${sport} from ESPN Server` },
      { status: response.status }
    )
  }
  const data = await response.json();
  return NextResponse.json(data);
}

export async function fetchLeagueNews(sport: string, league: string): Promise<NextResponse> {
  const response = await fetch(`${SPORTS_API_BASE_URL}/sports/${sport}/${league}/news`, {
    method: "GET",
    headers: getHeaders(),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: `Failed to fetch news of ${league} league under ${sport} from ESPN Server` },
      { status: response.status }
    )
  }
  const data = await response.json();
  return NextResponse.json(data);
}
