import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface SportInputType {
  sport: string
}

export function FixturesList({ sport }: SportInputType) {
  // Fetch via sport
  console.log(sport);
  const fixtures: any[] = []

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {fixtures.map((fixture) => (
        <Card key={fixture.id} className="overflow-hidden">
          <CardHeader className="p-4 pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium">{fixture.competition}</CardTitle>
            <Badge
              variant={
                fixture.status === "Live" ? "destructive" : fixture.status === "Finished" ? "secondary" : "outline"
              }
            >
              {fixture.status}
            </Badge>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src={fixture.homeTeamLogo || "/placeholder.svg"}
                    alt={fixture.homeTeam}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="font-medium">{fixture.homeTeam}</span>
                </div>
                {fixture.status !== "Upcoming" && <span className="font-bold">{fixture.score?.split("-")[0]}</span>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src={fixture.awayTeamLogo || "/placeholder.svg"}
                    alt={fixture.awayTeam}
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="font-medium">{fixture.awayTeam}</span>
                </div>
                {fixture.status !== "Upcoming" && <span className="font-bold">{fixture.score?.split("-")[1]}</span>}
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                <div>{fixture.date}</div>
                <div>{fixture.time}</div>
              </div>
              <div className="text-sm text-muted-foreground">{fixture.venue}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
