import './App.css';
import TabBox from './components/TabBox';
import { useState, createContext, Suspense } from 'react';
import listTeams from './data/teams';
import listMatches from './data/matches';
import StartScreen from './components/StartScreen';
import RangeCheck from './components/RangeCheck';
import FinalScoreboard from './components/FinalScoreboard';
import { useTranslation } from 'react-i18next';

export const Context = createContext();

function SuspensedApp() {
  const [teams, setTeams] = useState(listTeams);
	const [matches, setMatches] = useState(listMatches);
	const [teamsFinalScore, setTeamsFinalScore] = useState(listTeams);
	const [finalScoreboardEnabled, setFinalScoreboardEnabled] = useState(false);
	const [champion, setChampion] = useState(null);
  const [timezone, setTimezone] = useState('Qatar');

  const [tC, i18n] = useTranslation('countries');
  const [tSB, ] = useTranslation('scoreboard');

  function enableScoreboard () {
		setFinalScoreboardEnabled(true);
	}

	function defineChampion ( teamName ) {
		setChampion(teamName);
	}

  function toggleTimeZone() {
    if (timezone === 'Qatar') {
      setTimezone('Local');
    }
    else if (timezone === 'Local') {
      setTimezone('Qatar');
    };
  }

  function toggleLanguage() {
    const lang = i18n.language;

    if (lang === 'es') {
      i18n.changeLanguage('en');
    }
    else if (lang === 'en') {
      i18n.changeLanguage('es');
    };
  }

  function translateTDBefore () {
    /* Translates missing responsive label values and the title of the app */
    const tdBeforeElements = document.querySelectorAll('div.tdBefore');

    for (const element of tdBeforeElements) {
      element.innerHTML = tSB(element.innerHTML);
    }
   }

  return (
    <Context.Provider value={[timezone, teams, setTeams, matches, setMatches, teamsFinalScore, setTeamsFinalScore]}>
      <div className="App">
        <StartScreen />
        <div className="settings">
          <RangeCheck
            label="Timezone"
            state={tC(timezone)}
            changeState={toggleTimeZone} />
          <RangeCheck
            label="Language"
            state={i18n.language}
            changeState={() => {
              toggleLanguage();
              translateTDBefore();
            }} />
        </div>
        <TabBox enableScoreboard={enableScoreboard} defineChampion={defineChampion} champion={champion}/>
        <FinalScoreboard teams={teamsFinalScore} enabled={finalScoreboardEnabled} champion={champion}/>
      </div>
    </Context.Provider>
  );
}

function App() {
  return (
    <Suspense fallback="loading dependencies">
      <SuspensedApp />
    </Suspense>
  );
}

export default App;
