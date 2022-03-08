module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: {
        field: 'seller_id',
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      totalPrice: {
        field: 'total_price',
        type: Sequelize.DECIMAL(9, 2),
      },
      deliveryAddress: {
        field: 'delivery_address',
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        field: 'delivery_number',
        type: Sequelize.STRING,
      },
      createdAt: {
        field: 'sale_date',
        allowNull: false,
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  },
};
