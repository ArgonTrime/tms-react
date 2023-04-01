const statsPackage = (stats) => {
  return stats.reduce((result, { base_stat, stat }) => {
    result[stat.name] = base_stat;
    return result;
  }, {});
};
export default statsPackage;
