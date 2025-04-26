export function parseFootballFixtures(espnData: Record<string, unknown>) {
    // Initialise the return object and assert typing for ESPN API Data
    const parsedData: any = {};
    const data = espnData as { events?: any[], currentSeason: any };

    parsedData.seasonName = data.currentSeason.name;

    if (!data.events) {
        return parsedData;
    }
    parsedData.matches = [];

    for (const [key, value] of Object.entries(data.events)) {
        const convertedDate = `${key.slice(6, 8)}-${key.slice(4, 6)}-${key.slice(0, 4)}`
        const parsedMatches: Set<any> = new Set();
        value.forEach((match: any) => {
            const matchData: any = {};
            matchData.date = match.date;
            matchData.name = match.name;
            matchData.shortName = match.shortName;
            matchData.id = match.id;
            
            if (match.competitors && match.competitors.length == 2) {
                const [teamA, teamB] = match.competitors;

                const homeStatus = teamA.isHome === true;
            
                const formatTeam = (teamInfo: any) => ({
                    displayName: teamInfo.displayName,
                    id: teamInfo.id,
                    colour: teamInfo.teamColor,
                    alternativeColour: teamInfo.altColor,
                    logo: teamInfo.logo
                });

                const teamOne = formatTeam(teamA.team);
                const teamTwo = formatTeam(teamB.team);

                matchData.homeTeam = homeStatus ? teamOne : teamTwo;
                matchData.awayTeam = homeStatus ? teamTwo : teamOne;
            }

            if (match.venue) {
                matchData.venue = match.venue.fullName;
            }
            parsedMatches.add(matchData);
        });

        parsedData.matches.push(
            {
                "date": convertedDate,
                "matches": parsedMatches
            }
        )
    }
    return parsedData;
}