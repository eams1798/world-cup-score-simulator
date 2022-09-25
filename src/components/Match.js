import { Context } from '../App';
import { useContext } from 'react';
import qatarTZtoLocalTZString, { monthName } from './functions/qatarTZtoLocalTZString';
import './styles/Match.css';
import { useTranslation } from 'react-i18next';

function Match ({match, setScore}) {

  const [timezone, , , , , , ] = useContext(Context);
  const [tC, ] = useTranslation('countries');
  const [tM, ] = useTranslation('months');
  const [tS, ] = useTranslation('stadiums');

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
    <div className='matches-inline'>
      <div className="info-date-stadium">
        <p>{translateMonthFromString(
            timezone === 'Qatar' ?
            match.date:
            qatarTZtoLocalTZString(match.date)
          )} - {tS(match.stadium)}</p>
      </div>
      <div className="match-score">
        <div className="label-home">
          <label
            htmlFor={`match_${match.match}-${match.home.name.toLowerCase()}`}>
            {tC(match.home.name.replaceAll(' ', '-'))}
          </label>
        </div>
        <div className="input-score">
          <input
            id={`match_${match.match}-${match.home.name.toLowerCase()}`}
            type="tel"
            maxLength="2"
            defaultValue={match.home.goals === null ? '' : match.home.goals}
            onChange={(e) => setScore(match.match, match.home.name, e.target.value, true)} />
          <p>-</p>
          <input
            id={`match_${match.match}-${match.away.name.toLowerCase()}`}
            type="tel"
            maxLength="2"
            defaultValue={match.away.goals === null ? '' : match.away.goals}
            onChange={(e) => setScore(match.match, match.away.name, e.target.value, false)} />
        </div>
        <div className="label-away">
          <label htmlFor={`match_${match.match}-${match.away.name.toLowerCase()}`}>
            {tC(match.away.name.replaceAll(' ', '-'))}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Match;
