export const sortData = (data, text) => {
    return [...data]
        ?.sort((a, b) => {
            return b[text] - a[text];
        })
        .slice(0, 5)
        .map((item) => ({
            label: item.name,
            value: item[text],
        }));
};

export const findLanguageData = (data, value) => {
    const langObj = data.reduce((acc, cur) => {
        if (cur.language !== null) {
            if (value) {
                acc[cur.language] = (acc[cur.language] || 0) + cur[value];
            } else {
                acc[cur.language] = (acc[cur.language] || 0) + 1;
            }
        }
        return acc;
    }, {});

    return Object.keys(langObj).map((language) => {
        return {
            label: language,
            value: langObj[language],
        };
    });
};
