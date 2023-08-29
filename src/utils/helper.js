export const convertPrice = (number) => {
    let price = number.split('');
    const length = price.length;
    const indexFix = [3, 6, 9, 12];
    for (const index of indexFix) if (index < length) price.splice(length - index, 0, '.');
    return price;
};
