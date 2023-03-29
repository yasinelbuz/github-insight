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
