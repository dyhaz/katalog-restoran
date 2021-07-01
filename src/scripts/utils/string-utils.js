const truncateStr = (str, n) => ((str.length > n) ? `${str.substr(0, n - 1)}&hellip;` : str);

export default truncateStr;
