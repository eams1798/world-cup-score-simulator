import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import './styles/react-tabs.css';
import './styles/ScoreBoard.css';
import './styles/SuperResponsiveTableStyle.css';
import Flag8Star from './Flag8Star';
import { useTranslation } from 'react-i18next';

function ScoreBoard({teams}) {

  const [tC, ] = useTranslation('countries');
  const [tSB, ] = useTranslation('scoreboard');

  return (
    <div className="centered-table">
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th className="item-nameteam">{tSB('Team')}</Th>
            <Th className="item-scoreboard">{tSB('Pts')}</Th>
            <Th className="item-scoreboard">{tSB('MP')}</Th>
            <Th className="item-scoreboard">{tSB('W')}</Th>
            <Th className="item-scoreboard">{tSB('D')}</Th>
            <Th className="item-scoreboard">{tSB('L')}</Th>
            <Th className="item-scoreboard">{tSB('GF')}</Th>
            <Th className="item-scoreboard">{tSB('GA')}</Th>
            <Th className="item-scoreboard">{tSB('GD')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {teams.map((team, index) => (
            <Tr
              key={index}
              className={team.qualified !== 'groupStage' ? 'qualified': ''}
              aftercontent={tSB('Q')}>
              <Td className="item-flag">
                <Flag8Star className="item-original-flag" nameTeam={team.name} flagTeam={`./images/${team.logo}`}/> 
              </Td>
              <Td className="item-nameteam">
                <div className="flag-inline td-after">
                  <div className="flag-container">
                    <Flag8Star className="item-responsive-flag" nameTeam={team.name} flagTeam={`./images/${team.logo}`}/>
                  </div>
                  <p className="nameteam">{tC(team.name.replace(' ', '-'))}</p>
                </div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.score}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.matches}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.wins}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.draws}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.losses}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.goalsFor}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.goalsAgainst}</div>
              </Td>
              <Td className="item-scoreboard">
                <div className="td-after">{team.goalsFor - team.goalsAgainst}</div>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>

  );
}

export default ScoreBoard;
