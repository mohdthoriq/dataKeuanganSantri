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
    username?: string;
    email?: string;
  }) {
    const parameter = {
      transaction_details: {
        order_id: payload.orderId,
        gross_amount: payload.amount,
      },
      customer_details: {
        fullname: payload.username ?? null,
        email: payload.email ?? null,
      },
      callback: {
        finish_url: 'http://localhost:3000/payment/success',
        error_url: 'http://localhost:3000/payment/failed',
        pending_url: 'http://localhost:3000/payment/pending'
      },
    };

    const transaction = await this.snap.createTransaction(parameter);

    return transaction.token;
  }
}

export default new MidtransRepository();
