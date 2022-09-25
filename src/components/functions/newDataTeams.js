export default function newDataTeams (nameTeams, matches) {
  const matchesPlayed = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      [match.home.name, match.away.name].includes(team)?
      total + 1 : total), 0)
  ));

  const wins = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      (match.home.name === team
        && match.home.goals != null
        && match.away.goals != null
        && match.home.goals > match.away.goals) ||
      (match.away.name === team
        && match.home.goals != null
        && match.away.goals != null
        && match.away.goals > match.home.goals) ?
      total + 1 : total), 0)
  ));

  const draws = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      (match.home.name === team || match.away.name === team)
      && (match.home.goals != null && match.away.goals != null)
      && (match.home.goals === match.away.goals)  ?
      total + 1 : total), 0)
  ));

  const losses = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      (match.home.name === team
        && match.home.goals != null
        && match.away.goals != null
        && match.home.goals < match.away.goals) ||
      (match.away.name === team
        && match.home.goals != null
        && match.away.goals != null
        && match.away.goals < match.home.goals) ?
      total + 1 : total), 0)
  ));

  const goalsForHome = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      (match.home.name === team
        && match.home.goals != null) ?
        total + match.home.goals : total), 0)
  ));

  const goalsForAway = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      (match.away.name === team
        && match.away.goals != null) ?
        total + match.away.goals : total), 0)
  ));

  const goalsAgainstHome = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      (match.home.name === team
        && match.away.goals != null) ?
        total + match.away.goals : total), 0)
  ));

  const goalsAgainstAway = nameTeams.map((team) => (
    matches
    .reduce((total, match) => (
      (match.away.name === team
        && match.home.goals != null) ?
        total + match.home.goals : total), 0)
  ));

  return ([matchesPlayed, wins, draws, losses,
    goalsForHome, goalsForAway, goalsAgainstHome,
    goalsAgainstAway])
}