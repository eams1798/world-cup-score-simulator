import { useContext } from 'react';
import { Context } from '../App';
import newDataTeams from './functions/newDataTeams';
import qatarTZtoLocalTZString, { monthName } from './functions/qatarTZtoLocalTZString';
import './styles/PanelKOStage.css';
import { useTranslation } from 'react-i18next';

function StageTemplate ({stage, matchesStage, enableScoreboard, defineChampion}) {

  const [t, ] = useTranslation('tablabels');
  const [tB, ] = useTranslation('button');
  const [tC, ] = useTranslation('countries');
  const [tM, ] = useTranslation('months');
  const [tS, ] = useTranslation('stadiums');

  const [timezone, teams, setTeams,
    matches, setMatches,
    , setTeamsFinalScoreboard] = useContext(Context);

  function setScore(teamName, score, goalType, isHomeTeam) {
    if (teamName !== null) {
      let [updatedMatch] = matchesStage.filter(match => (
        match.home.name === teamName
        || match.away.name === teamName
      ));

      const restOfMatches = matches.filter(match => match !== updatedMatch);

      const goals = score !== '' && !(Number.isNaN(parseInt(score))) ? parseInt(score) : null;

      if (isHomeTeam) {
        if (goalType === 'goal') {
          updatedMatch.home.goals = goals;
        } else if (goalType === 'penalty') {
          updatedMatch.home.penalties = goals;
        }
      } else {
        if (goalType === 'goal') {
          updatedMatch.away.goals = goals;
        } else if (goalType === 'penalty') {
          updatedMatch.away.penalties = goals;
        }
      }

      if (updatedMatch.home.goals !== updatedMatch.away.goals
        && updatedMatch.home.penalties === updatedMatch.away.penalties) {
        updatedMatch.home.penalties = null;
        updatedMatch.away.penalties = null;
      }

      setMatches([...restOfMatches, updatedMatch].sort((x, y) => x.id - y.id));
    };
  }

  function qualifyTeams (e) {
    e.preventDefault();

    const nameStage = matchesStage[0].group;
    let updatedMatches = matches.filter(match => match.id > 48);
    const restOfMatches = matches.filter(match => match.id <= 48);
    let rebootedMatches = updatedMatches.filter(match => match.group !== nameStage);

    matchesStage.forEach(match => {
      if (match.home.penalties !== null
        && match.away.penalties !== null
        && match.home.penalties === match.away.penalties) {
        alert(t("error-penalties"));
        return;
      }
      else {
        let winnerTeam;
        let loserTeam;

        if ((match.home.goals === match.away.goals
          && match.home.penalties > match.away.penalties)
        || (match.home.goals > match.away.goals)) {
            winnerTeam = match.home.name;
            loserTeam = match.away.name;
        } else if ((match.home.goals === match.away.goals
          && match.home.penalties < match.away.penalties)
        || (match.home.goals < match.away.goals)) {
          winnerTeam = match.away.name;
          loserTeam = match.home.name;
        }

        match.winner = winnerTeam;
        match.loser = loserTeam;
      }
    });

    if (nameStage === 'roundOf16') {
      enableScoreboard();
    }
  
    rebootedMatches.forEach(match => {
      const idHomeTeam = match.home.id;
      const idAwayTeam = match.away.id;
      let homeTeamName;
      let awayTeamName;
      if ((nameStage === 'roundOf16' && match.group === 'quarterFinals')
      || (nameStage === 'quarterFinals' && match.group === 'semifinals')
      || (nameStage === 'semifinals' && (match.group === '3rdPlacePlayOff' || match.group === 'final'))) {
        if (match.group !== '3rdPlacePlayOff') {
          homeTeamName = matchesStage
            .filter(match => match.id === parseInt(idHomeTeam.replace('GP', '')))[0].winner;
          awayTeamName = matchesStage
            .filter(match => match.id === parseInt(idAwayTeam.replace('GP', '')))[0].winner;
        } else {
          homeTeamName = matchesStage
            .filter(match => match.id === parseInt(idHomeTeam.replace('PP', '')))[0].loser;
          awayTeamName = matchesStage
            .filter(match => match.id === parseInt(idAwayTeam.replace('PP', '')))[0].loser;
        };
        match.home = { id: idHomeTeam, name: homeTeamName? homeTeamName: null, goals: null, penalties: null };
        match.away = { id: idAwayTeam, name: awayTeamName? awayTeamName: null, goals: null, penalties: null };
        match.winner = null;
        match.loser = null;
      } else if ((nameStage === 'roundOf16' && ['semifinals', '3rdPlacePlayOff', 'final'].includes(match.group))
      || (nameStage === 'quarterFinals' && ['3rdPlacePlayOff', 'final'].includes(match.group))) {
        match.home = { id: idHomeTeam, name:  null, goals: null, penalties: null };
        match.away = { id: idAwayTeam, name: null, goals: null, penalties: null };
        match.winner = null;
        match.loser = null;
      };
    });

    updatedMatches = [...matchesStage, ...rebootedMatches].sort((x, y) => x.id - y.id);
    setMatches([...restOfMatches, ...updatedMatches]);

    teams.forEach(team => {
      if (nameStage === 'semifinals') {
        if (matchesStage.some(match => match.winner === team.name)) {
          team.qualified = 'final';
        }
        else if (matchesStage.some(match => match.loser === team.name)) {
          team.qualified = '3rdPlacePlayOff';
        }
      }
      else if (matchesStage.some(match => match.winner === team.name)) {
        if (nameStage === 'roundOf16') {
          team.qualified = 'quarterFinals';
        }
        else if (nameStage === 'quarterFinals') {
          team.qualified = 'semifinals';
        }
      }
    });

    if (nameStage === 'final') {
      let teamChampion = null;

      for (const team of teams) {
        if (matchesStage[0].winner === team.name) {
          teamChampion = team.name;
          defineChampion(teamChampion);
          break;
        };
      }
    };
    setTeams([...teams]);
  

    /* actualizar los resultados en tabla final de teams */
    // coger los resultados de la stage final
    // agarrar los goles hechos por cada team y los suma en la tabla de teams
    // a partir de semifinals, ponerles el position de primero, segundo, tercero, cuarto

    const nameTeamsKOStageHome = matches
      .filter(match => match.id > 48 && match.id <= 56)
      .map(match => match.home.name);
    const nameTeamsKOStageAway = matches
      .filter(match => match.id > 48 && match.id <= 56)
      .map(match => match.away.name);
    const nameTeamsKOStage = [...nameTeamsKOStageHome, ...nameTeamsKOStageAway];

    const [matchesPlayed, wins, draws, losses,
      goalsForHome, goalsForAway,
      goalsAgainstHome, goalsAgainstAway] = newDataTeams(nameTeamsKOStage, updatedMatches);

    let objUpdatedTeams = [];

    nameTeamsKOStage.forEach((teamName, index) => {
      let [updatedTeam] = teams.filter(team => team.name === teamName);

      updatedTeam = {
        ...updatedTeam,
        matches: updatedTeam.matches + matchesPlayed[index],
        wins: updatedTeam.wins + wins[index],
        draws: updatedTeam.draws + draws[index],
        losses: updatedTeam.losses + losses[index],
        goalsFor: updatedTeam.goalsFor + goalsForHome[index] + goalsForAway[index],
        goalsAgainst: updatedTeam.goalsAgainst + goalsAgainstHome[index] + goalsAgainstAway[index],
        score: updatedTeam.score + wins[index] * 3 + draws[index],
        position: 0
      }

      objUpdatedTeams.push(updatedTeam);
    });

    const restOfTeams = teams
      .filter(team => !(nameTeamsKOStage.includes(team.name)));

    let qualifyingOrder = {
      groupStage: 0,
      roundOf16: 1,
      quarterFinals: 2,
      semifinals: 3,
      '3rdPlacePlayOff': 4,
      final: 5
    };

    const updatedFinalScoreboard = [...restOfTeams, ...objUpdatedTeams].sort((x, y) => {
      if (qualifyingOrder[y.qualified] === qualifyingOrder[x.qualified]) {
        if ([4, 5].includes(qualifyingOrder[y.qualified])) {
          const [winner] = matches
            .filter((match) => match.group === y.qualified)
            .map((match) => match.winner );
          return winner === y.name? 1: -1;
        }
        else {
          if ( y.score === x.score ) {
            if (( y.goalsFor - y.goalsAgainst ) === ( x.goalsFor - x.goalsAgainst)) {
              return y.goalsFor - x.goalsFor;
            }
            else {
              return (y.goalsFor - y.goalsAgainst ) - ( x.goalsFor - x.goalsAgainst);
            }
          }
          else {
            return y.score - x.score;
          }
        }
      }
      else {
        return qualifyingOrder[y.qualified] - qualifyingOrder[x.qualified];
      }
    });

    setTeamsFinalScoreboard([...updatedFinalScoreboard]);
  };

  function scrollToScoreBoard() {
		window.location.replace("#FinalScoreboard");
	}

  function translateMonthFromString (dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = tM(monthName[date.getMonth()]);
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {minutes = '0' + minutes.toString()};

    return (`${day} ${month} ${year} ${hours}:${minutes}`)
  }

	return (
    <>
      <h2>{t(stage.replaceAll(' ', '-'))}</h2>
      <form className="list-matches" onSubmit={(e) => {
          qualifyTeams(e);
          if (stage !== 'Final') {
            scrollToScoreBoard();
          }
        }}>
        {matchesStage.map((match, index) => (
          <div key={index} className='matches-inline'>
            <div className="info-date-stadium">
              <p>{translateMonthFromString(
                  timezone === 'Qatar' ?
                  match.date:
                  qatarTZtoLocalTZString(match.date)
                )} - {tS(match.stadium)}</p>
            </div>
            <div className={match.home.goals === match.away.goals
              && match.home.goals !== null ?
              "match-score with-penalty": "match-score"}>
              <div className="label-home">
                <label
                  htmlFor={`home-${match.home.id}`} >
                  {match.home.name !== null ? tC(match.home.name.replaceAll(' ', '-')): match.home.id}
                </label>
              </div>
              <div className="input-score">
                <input
                  id={`home-${match.home.id}`}
                  type="tel"
                  maxLength="2"
                  disabled={match.home.name? false: true}
                  defaultValue={match.home.goals === null ? '' : match.home.goals}
                  onChange={(e) => setScore(match.home.name, e.target.value, 'goal', true)} />
                <p>-</p>
                <input
                  id={`away-${match.away.id}`}
                  type="tel"
                  maxLength="2"
                  disabled={match.away.name? false: true}
                  defaultValue={match.away.goals === null ? '' : match.away.goals}
                  onChange={(e) => setScore(match.away.name, e.target.value, 'goal', false)} />
              </div>
              <div className="label-away">
                <label htmlFor={`away-${match.away.id}`}>
                  {match.away.name !== null ? tC(match.away.name.replaceAll(' ', '-')): match.away.id}
                </label>
              </div>
            </div>
            <div
              className="match-score penalty-details"
              style={{display: match.home.goals === match.away.goals
              && match.home.goals !== null ?
              'flex': 'none'}}>
              <div className="div-void">
                <p>{t('Penalties')}</p>
              </div>
              <div className="input-score">
                <input
                  id={`home-${match.home.id}-penalties`}
                  type="tel"
                  maxLength="2"
                  disabled={match.home.name? false: true}
                  defaultValue={match.home.penalties === null ? '' : match.home.penalties}
                  onChange={(e) => setScore(match.home.name, e.target.value, 'penalty', true)} />
                <p>-</p>
                <input
                  id={`away-${match.away.id}-penalties`}
                  type="tel"
                  maxLength="2"
                  disabled={match.away.name? false: true}
                  defaultValue={match.away.penalties === null ? '' : match.away.penalties}
                  onChange={(e) => setScore(match.away.name, e.target.value, 'penalty', false)} />
              </div>
              <div className="div-void">
              </div>
            </div>
          </div>
			  ))}
        <button
          type="submit"
          disabled={matchesStage.every(match => (match.home.name !== null
            && match.away.name !== null &&
            ((match.home.goals !== null && match.away.goals != null
              && match.home.goals !== match.away.goals)
            ||(match.home.goals === match.away.goals
              && match.home.penalties != null && match.away.penalties != null))))?
            false: true}
          >{tB('Calculate')}</button>
      </form>
    </>
	);
}

export function PanelRound16 ({enableScoreboard}) {

	const [, , , matches, ] = useContext(Context);

	const stage = 'Round of 16';

  const matchesStage = matches
    .filter( match => match.group === 'roundOf16')
    .sort((x, y) => x.id - y.id);

	return (
    <div className="panel-container">
      <StageTemplate className='R16Template' stage={stage} matchesStage={matchesStage} enableScoreboard={enableScoreboard} />
    </div>
	)
}

export function PanelQuarterFinals () {
  const [, , , matches, ] = useContext(Context);
	const stage = 'Quarter Finals';
	const matchesStage = matches
    .filter( match => match.group === 'quarterFinals')
    .sort((x, y) => x.id - y.id);

	return (
    <div className="panel-container">
      <StageTemplate className='QFTemplate' stage={stage} matchesStage={matchesStage} />
    </div>
	);
}

export function PanelSemifinals () {
  const [, , , matches, ] = useContext(Context);
	const stage = 'Semifinals';
	const matchesStage = matches
    .filter( match => match.group === 'semifinals')
    .sort((x, y) => x.id - y.id);

	return (
    <div className="panel-container">
      <StageTemplate className='SFTemplate' stage={stage} matchesStage={matchesStage} />
    </div>
	);
}

export function PanelFinal ({defineChampion, champion}) {
  const [, teams, , matches, ] = useContext(Context);
  const [tC, ] = useTranslation('countries');
  const [tCh, ] = useTranslation('champion');

  const match3rdPlace = matches
  .filter( match => match.group === '3rdPlacePlayOff')
  .sort((x, y) => x.id - y.id);
  const finalMatch = matches
    .filter( match => match.group === 'final')
    .sort((x, y) => x.id - y.id);
  const strImgChampion = champion? teams.filter(team => team.name === champion)[0].imgchampion: '';

	return (
    <div className="panel-container">
      <StageTemplate className='M3rdTemplate' stage={'Third place play-off'} matchesStage={match3rdPlace} />
      <StageTemplate className='FinalTemplate' stage={'Final'} matchesStage={finalMatch} defineChampion={defineChampion}/>
      <div className='champion-container' style={{display: champion? 'flex': 'none'}}>
        {champion? <img
          src={require(`./images/${strImgChampion}`)}
          alt={champion}
          className="champion" />: <></>}
        <p>{tCh('champion-congrats', {champion: tC(champion)})}</p>
        {/* <p>Congratulations, {champion}, you are the champion of FIFA World Cup Qatar 2022</p> */}
      </div>
    </div>
	);
}
