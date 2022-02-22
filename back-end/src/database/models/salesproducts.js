module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',
    { quantity: DataTypes.INTEGER },
    { timestamps: false, underscored: true });
  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };
  return SalesProducts;
};
