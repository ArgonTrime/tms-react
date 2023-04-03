const statsPackage = (stats) => {
  const statsEntries = stats.reduce((result, { base_stat, stat }) => {
    result[stat.name] = base_stat;
    return result;
  }, {});
  return Object.entries(statsEntries);
};
export default statsPackage;
