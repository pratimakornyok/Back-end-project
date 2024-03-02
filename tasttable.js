const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

class Table1 extends Model {}
Table1.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING
}, { sequelize, modelName: 'Table1' });

class Table2 extends Model {}
Table2.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING
}, { sequelize, modelName: 'Table2' });

class Table3 extends Model {}
Table3.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING
}, { sequelize, modelName: 'Table3' });

class Table4 extends Model {}
Table4.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING
}, { sequelize, modelName: 'Table4' });

class Table5 extends Model {}
Table5.init({
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: DataTypes.STRING
}, { sequelize, modelName: 'Table5' });

sequelize.sync();