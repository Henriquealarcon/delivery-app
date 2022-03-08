module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    { quantity: DataTypes.INTEGER },
    { timestamps: false, underscored: true, tableName: 'salesProducts' });
  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };
  return salesProducts;
};
