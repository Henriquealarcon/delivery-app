module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, 
  { timestamps: false, tableName: 'Users', underscored: true });

  Users.associate = (models) => {
    Users.hasMany(models.Sales,
      { foreignKey: 'id', as: 'sales' });
  };

  return Users;
};
