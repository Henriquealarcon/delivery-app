module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, 
  { timestamps: false, tableName: 'Sales', underscored: true });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' },
      { foreignKey: 'sellerId', as: 'user' });
  };

  return Sales;
};
