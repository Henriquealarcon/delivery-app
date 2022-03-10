const Models = require('../database/models');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('changeStatus', async ({ id, status }) => {
    console.log('id:', id);
    console.log('status:', status);

    await Models.sales.update({ status }, { where: { id } });
    const updatedSale = await Models.sales.findByPk(id);

    io.emit('newStatus', updatedSale.status);
  });
});
