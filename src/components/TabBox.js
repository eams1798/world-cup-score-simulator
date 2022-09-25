import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './styles/react-tabs.css';
import './styles/TabBox.css';
import TabGroupStage from './TabGroupStage.js';
import TabKOStage from './TabKOStage.js';
import { useTranslation } from 'react-i18next';

function TabBox({enableScoreboard, defineChampion, champion}) {
	const [t, ] = useTranslation('tablabels');

	return (
		<>
			<Tabs className='react-tabs tabBox'>
				<TabList>
					<Tab className='react-tabs__tab tabMain'>{t('Group-Stage')}</Tab>
					<Tab className='react-tabs__tab tabMain'>{t('Knockout-Stage')}</Tab>
				</TabList>
				<TabPanel>
					<TabGroupStage />
				</TabPanel>
				<TabPanel>
					<TabKOStage enableScoreboard={enableScoreboard} defineChampion={defineChampion} champion={champion}/>
				</TabPanel>
			</Tabs>
		</>
	);
}

export default TabBox;
