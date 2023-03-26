import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import {
    languageConfigs,
    forkedReposConfigs,
    starsConfigs,
    starsPerLangConfigs,
} from './configs';

import { sortData, findLanguageData } from '@/helper/helper';
import styles from './Charts.module.scss';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



const NextFusionCharts = ({ reposData }) => {
    if (reposData) {
        let starsData = sortData(reposData, 'stargazers_count');
        starsConfigs.dataSource.data = starsData;

        let forksData = sortData(reposData, 'forks_count');
        forkedReposConfigs.dataSource.data = forksData;

        const langData = findLanguageData(reposData);
        languageConfigs.dataSource.data = langData;

        const starsPerLangData = findLanguageData(reposData, 'stargazers_count');
        starsPerLangConfigs.dataSource.data = starsPerLangData;
    }

    return (
        <section>
            <div className="container">
                <div className={styles.chart}>
                    <ReactFC {...languageConfigs} />
                    <ReactFC {...starsConfigs} />
                    <ReactFC {...starsPerLangConfigs} />
                    <ReactFC {...forkedReposConfigs} />
                </div>
            </div>
        </section>
    );
};

export default NextFusionCharts;
