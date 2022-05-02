import { createServer, Model } from 'miragejs';

export default createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de software',
          value: 12000,
          type: 'deposit',
          category: 'job',
          createdAt: new Date('2022-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Compra de notebook',
          value: 4000,
          type: 'withdraw',
          category: 'job',
          createdAt: new Date('2022-02-12 11:00:00'),
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('transactions', () => this.schema.all('transaction'), { timing: 3000 });
    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      const parsedData = { ...data, createdAt: new Date() };
      return schema.create('transaction', parsedData);
    }, {
      timing: 3000,
    });
  },
});
