import Midtrans from 'midtrans-client';
import config from '../utils/env';

class MidtransRepository {
  private snap: Midtrans.Snap;

  constructor() {
    console.log({
      isProduction: config.MIDTRANS_IS_PRODUCTION,
      serverKey: config.MIDTRANS_SERVER_KEY?.slice(0, 15),
    });

    this.snap = new Midtrans.Snap({
      isProduction: config.MIDTRANS_IS_PRODUCTION,
      serverKey: config.MIDTRANS_SERVER_KEY!,
      clientKey: config.MIDTRANS_CLIENT_KEY!,
    });
  }

  async createSnapToken(payload: {
    orderId: string;
    amount: number;
    name?: string;
    email?: string;
  }) {
    const parameter = {
      transaction_details: {
        order_id: payload.orderId,
        gross_amount: payload.amount,
      },
      customer_details: {
        first_name: payload.name ?? 'User',
        email: payload.email ?? 'user@mail.com',
      },
    };

    const transaction = await this.snap.createTransaction(parameter);

    return transaction.token;
  }
}

export default new MidtransRepository();
