type ButtonType = 'withdraw' | 'deposit';

export type Transaction = {
  id: number,
  title: string,
  value: number,
  category: string,
  type: ButtonType;
  createdAt: string;
}
