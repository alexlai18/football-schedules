import { fetchSportLeagues } from "@/lib/apiUtility";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sport: string }>}): Promise<NextResponse>
{
  try {
    const { sport } = await params;
    const response: NextResponse = await fetchSportLeagues(sport);

    return response;
  } catch (err: any) {
    return NextResponse.json(
      { message: `Error retrieving sports leagues` },
      { status: 500 }
    )
  }
}
