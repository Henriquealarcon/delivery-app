module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, 
  { timestamps: false, tableName: 'sales', underscored: true });

  sales.associate = (models) => {
    sales.belongsTo(models.users,
      { foreignKey: 'userId', as: 'user' },
      { foreignKey: 'sellerId', as: 'user' });
  };

  return sales;
};
