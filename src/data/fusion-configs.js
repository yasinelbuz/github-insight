const color = '#2caeba, #5d62b5, #ffc533, #f2726f, #8d6e63';
export const languageConfigs = {
    type: 'pie2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: {
        chart: {
            caption: 'Language',
            subCaption: "Which language has more repositories?",
            showLegend: '0',
            decimals: '0',
            showPercentValues: '0',
            theme: 'fusion',
            palettecolors: color,
            "bgColor": "#161B22",
            "baseFontColor": "#fff",
            "outCnvBaseFontColor": "#fff",
            "valueFontColor": "#fff",
            "baseFontColor": "#000"
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
            subCaption: "Which repos got the most stars?",
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
            "bgColor": "#161B22",
            "baseFontColor": "#fff",
            "outCnvBaseFontColor": "#fff",
            "valueFontColor": "#fff",
            "baseFontColor": "#000"
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
            subCaption: "Which language got more stars?",
            decimals: '0',
            showPercentValues: '0',
            showLegend: '0',
            xAxisName: 'Repos',
            yAxisName: 'Stars',
            theme: 'fusion',
            palettecolors: color,
            "bgColor": "#161B22",
            "baseFontColor": "#fff",
            "outCnvBaseFontColor": "#fff",
            "valueFontColor": "#fff",
            "baseFontColor": "#000"
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
            subCaption: "Which repos are more forked?",
            showValues: '1',
            xAxisName: 'Repos',
            yAxisName: 'Forks',
            xAxisNameFontSize: '18',
            xAxisNameFontBold: '1',
            xAxisNameFontColor: '#617d98',
            yAxisNameFontSize: '18',
            yAxisNameFontBold: '1',
            yAxisNameFontColor: '#fff',
            theme: 'fusion',
            palettecolors: color,
            "bgColor": "#161B22",
            "baseFontColor": "#fff",
            "outCnvBaseFontColor": "#fff",
            "valueFontColor": "#fff",
            "baseFontColor": "#000"

        },
    },
};