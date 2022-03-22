import { createServer } from 'miragejs';

export default createServer({
  routes() {
    this.namespace = 'api';
    this.get('transactions', () => [
      {
        id: new Date().getUTCMilliseconds(),
        title: 'Desenvolvimento de software',
        amount: 12000,
        type: 'deposit',
        category: 'job',
        createdAt: new Date(),
      },
    ]);
  },
});
