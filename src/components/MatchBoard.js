import { useContext } from 'react';
import './styles/react-tabs.css';
import './styles/MatchBoard.css';
import { Context } from '../App';
import newDataTeams from './functions/newDataTeams';
import Match from './Match';
import { useTranslation } from 'react-i18next';

function MatchBoard({teamsGroup, matchesGroup}) {

	const [, teams, setTeams, matches, setMatches, , ] = useContext(Context);
	const [tB, ] = useTranslation('button');

	const team1 = teamsGroup.filter(team => team.pot === 1)[0].name;
	const team2 = teamsGroup.filter(team => team.pot === 2)[0].name;
	const team3 = teamsGroup.filter(team => team.pot === 3)[0].name;
	const team4 = teamsGroup.filter(team => team.pot === 4)[0].name;

	function setScore(nMatch, teamName, nGoals, isHomeTeam) {

		let [updatedMatch] = matchesGroup
			.filter( match => match.match === nMatch
				&& (match.home.name === teamName || match.away.name === teamName));
		const restOfMatches = matches.filter( match => match !== updatedMatch );

		const goals = nGoals !== '' && !(Number.isNaN(parseInt(nGoals))) ? parseInt(nGoals) : null;

		if (isHomeTeam === true) {
			updatedMatch = {...updatedMatch, home: {name: teamName, goals: goals}};
		} else {
			updatedMatch = {...updatedMatch, away: {name: teamName, goals: goals}};
		}

		setMatches([...restOfMatches, updatedMatch].sort((x, y) => x.id - y.id));
	}

	function sendScoresToScoreboard(e) {
    /* Envia los resultados a la tabla de clasificaciones */
		e.preventDefault();

		const filledMatches = matchesGroup
			.filter( match => match.home.goals !== null
				&& match.away.goals !== null);

		const listNameUpdatedTeams = [team1, team2, team3, team4];

		let listUpdatedTeams = teams
			.filter(team => team.name === team1
				|| team.name === team2
				|| team.name === team3
				|| team.name === team4).sort((x, y) => x.pot - y.pot)
	
		const restOfTeams = teams
			.filter(team => team.name !== team1
				&& team.name !== team2
				&& team.name !== team3
				&& team.name !== team4);

    const [matchesPlayed, wins, draws, losses,
      goalsForHome, goalsForAway, goalsAgainstHome,
      goalsAgainstAway] = newDataTeams(listNameUpdatedTeams, filledMatches);

    let objUpdatedTeams = listUpdatedTeams.map((team, index) => ({...team,
      matches: matchesPlayed[index],
      wins: wins[index],
      draws: draws[index],
      losses: losses[index],
      goalsFor: goalsForHome[index] + goalsForAway[index],
      goalsAgainst: goalsAgainstHome[index] + goalsAgainstAway[index],
      score: wins[index] * 3 + draws[index],
    }));

		objUpdatedTeams = objUpdatedTeams.sort((y, x) => {
			if ( x.score === y.score ) {
				if (( x.goalsFor - x.goalsAgainst ) === ( y.goalsFor - y.goalsAgainst)) {
					return x.goalsFor - y.goalsFor;
				}
				else {
					return (x.goalsFor - x.goalsAgainst ) - ( y.goalsFor - y.goalsAgainst)
				}
			}
			else {
				return x.score - y.score;
			}
		});

		objUpdatedTeams[0].position = 1;
		objUpdatedTeams[1].position = 2;
		objUpdatedTeams[2].position = 3;
		objUpdatedTeams[3].position = 4;

    /* Cuando los resultados se envian, se determina la posicion y clasificacion de los teams,
       y se actualiza la lista de matches de la fase final
    */

    const groupTeams = objUpdatedTeams[0].group;

    let updatedMatches = matches
      .filter( match => match.group === 'roundOf16' )
      .filter( match => match.home.id[1] === groupTeams
        || match.away.id[1] === groupTeams);

		if (objUpdatedTeams.every(team => team.matches === 3)) {
			objUpdatedTeams[0].qualified = 'roundOf16';
			objUpdatedTeams[1].qualified = 'roundOf16';
			objUpdatedTeams[2].qualified = 'groupStage';
			objUpdatedTeams[3].qualified = 'groupStage';

      updatedMatches.forEach( match => {
        if ('1' + objUpdatedTeams[0].group === match.home.id) {
          match.home.name = objUpdatedTeams[0].name;
        } else if ('1' + objUpdatedTeams[0].group === match.away.id) {
          match.away.name = objUpdatedTeams[0].name;
        }
        if ('2' + objUpdatedTeams[1].group === match.home.id) {
          match.home.name = objUpdatedTeams[1].name;
        } else if ('2' + objUpdatedTeams[1].group === match.away.id) {
          match.away.name = objUpdatedTeams[1].name;
        }
      });
		}
    else {
      updatedMatches.forEach( match => {
        if ('1' + objUpdatedTeams[0].group === match.home.id) {
          match.home.name = null;
        } else if ('1' + objUpdatedTeams[0].group === match.away.id) {
          match.away.name = null;
        }
        if ('2' + objUpdatedTeams[1].group === match.home.id) {
          match.home.name = null;
        } else if ('2' + objUpdatedTeams[1].group === match.away.id) {
          match.away.name = null;
        }
      });
    }

    const restOfMatches = matches
      .filter( match => !updatedMatches.includes(match));

    const newTeams = [...restOfTeams, ...objUpdatedTeams];

		setTeams(newTeams);
    setMatches([...restOfMatches, ...updatedMatches].sort((x, y) => x.id - y.id));
	}

	function scrollToTop() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		/* window.location.replace("#") */
	  }

	return (
		<>
			<form className="list-matches" onSubmit={(e) => {
				  sendScoresToScoreboard(e);
				  scrollToTop();
				}}>
				{matchesGroup.map( (match, index) => (
					<Match match={match} key={index} setScore={setScore} />
				))}
				<button type="submit">{tB('Calculate')}</button>
			</form>
		</>
	);
}

export default MatchBoard;
