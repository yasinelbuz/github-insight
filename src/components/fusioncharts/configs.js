const color = '#2caeba, #5d62b5, #ffc533, #f2726f, #8d6e63';
export const languageConfigs = {
    type: 'pie2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Language',
            showLegend: '0',
            decimals: '0',
            showPercentValues: '0',
            theme: 'fusion',
            palettecolors: color,
        },
    },
};
export const starsConfigs = {
    type: 'column2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Most Popular',
            showValues: '1',
            xAxisName: 'Repos',
            yAxisName: 'Stars',
            xAxisNameFontSize: '18',
            xAxisNameFontBold: '1',
            xAxisNameFontColor: '#617d98',
            yAxisNameFontSize: '18',
            yAxisNameFontBold: '1',
            yAxisNameFontColor: '#617d98',
            theme: 'fusion',
            palettecolors: color,
        },
    },
};
export const starsPerLangConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Stars Per Language',
            decimals: '0',
            showPercentValues: '0',
            showLegend: '0',
            xAxisName: 'Repos',
            yAxisName: 'Stars',
            theme: 'fusion',
            palettecolors: color,
        },
    },
};
export const forkedReposConfigs = {
    type: 'bar2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Most Forked',
            showValues: '1',
            xAxisName: 'Repos',
            yAxisName: 'Forks',
            xAxisNameFontSize: '18',
            xAxisNameFontBold: '1',
            xAxisNameFontColor: '#617d98',
            yAxisNameFontSize: '18',
            yAxisNameFontBold: '1',
            yAxisNameFontColor: '#617d98',
            theme: 'fusion',
            palettecolors: color,
        },
    },
};