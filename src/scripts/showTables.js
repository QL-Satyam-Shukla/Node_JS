const sequelize = require('../config/database');

(async () => {
  try {
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.table(tables);
  } catch (err) {
    console.error("Error listing tables:", err);
  } finally {
    await sequelize.close();
  }
})();

















