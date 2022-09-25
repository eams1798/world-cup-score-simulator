import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PanelRound16, PanelQuarterFinals, PanelSemifinals, PanelFinal } from './PanelKOStage';
import './styles/react-tabs.css';
import './styles/TabKOStage.css';
import { useTranslation } from 'react-i18next';

function TabKOStage ({enableScoreboard, defineChampion, champion}) {

	const [t, ] = useTranslation('tablabels');

	return (
		<Tabs className='react-tabs subTab'>
			<TabList className='tablist'>
				<Tab className='react-tabs__tab tabFS'>{t('Round-of-16')}</Tab>
				<Tab className='react-tabs__tab tabFS'>{t('Quarter-Finals')}</Tab>
				<Tab className='react-tabs__tab tabFS'>{t('Semifinals')}</Tab>
				<Tab className='react-tabs__tab tabFS'>{t('Final')}</Tab>
			</TabList>
			<TabPanel className='panelOF'><PanelRound16 enableScoreboard={enableScoreboard}/></TabPanel>
			<TabPanel className='panelCF'><PanelQuarterFinals /></TabPanel>
			<TabPanel className='panelSF'><PanelSemifinals /></TabPanel>
			<TabPanel className='panelF'><PanelFinal defineChampion={defineChampion} champion={champion}/></TabPanel>
		</Tabs>
	);
}

export default TabKOStage;
