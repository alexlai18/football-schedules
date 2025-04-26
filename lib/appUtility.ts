export const relevantSports: string[] = [
  "soccer",
  "basketball",
  "racing"
]

export const quickLinks: { [key: string]: { [key: string]: string } }  = {
  "Football Leagues": {
    "Premier League": "eng.1",
    "La Liga": "esp.1",
    "Serie A": "ita.1",
    "Bundesliga": "ger.1",
    "Ligue 1": "fra.1"
  },
  "Football Competitions": {
    "English FA Cup": "eng.fa",
    "English Carabao (EFL) Cup": "eng.league_cup",
    "UEFA Champions League": "eufa.champions",
    "UEFA Europa League": "eufa.europa"
  },
  "International Football": {
    "FIFA World Cup": "fifa.world",
    "FIFA World Cup Qualifying (CONCACAF)": "fifa.worldq.concacaf",
    "FIFA World Cup Qualifying (CONMEBOL)": "fifa.worldq.conmebol",
    "FIFA World Cup Qualifying (UEFA)": "fifa.worldq.uefa",
    "FIFA World Cup Qualifying (CAF)": "fifa.worldq.caf",
    "FIFA World Cup Qualifying (AFC)": "fifa.worldq.afc",
    "UEFA Nations League": "uefa.nations",
    "International Friendly": "fifa.friendly",
    "Euros Qualifying": "uefa.euroq",
    "EURO": "uefa.euro",
    "Copa America": "conmebol.america"
  },
  "Basketball": {
    "NBA": "nba",
    "FIBA World Cup": "fiba"
  },
  "Racting": {
    "F1": "f1"
  }
}

export const calculateUserOffset = () => {
  const userOffset = new Date().getTimezoneOffset(); // in minutes
  const sign = userOffset > 0 ? '-' : '+'; // "+" for UTC+ and "-" for UTC-
  const absoluteOffset = Math.abs(userOffset);
  const hours = String(Math.floor(absoluteOffset / 60)).padStart(2, '0');
  const minutes = String(absoluteOffset % 60).padStart(2, '0');
  const formattedOffset = `${sign}${hours}:${minutes}`;
  return encodeURIComponent(formattedOffset)
}

export const calculateDate = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0].replace(/-/g, '');
  return formattedDate
}