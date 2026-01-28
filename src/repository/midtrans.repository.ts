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
      callbacks: {  
        finish: 'https://pesantrenlink.vercel.app/payment/success',    
        error: 'https://pesantrenlink.vercel.app/payment/failed',      
        unfinish: 'https://pesantrenlink.vercel.app/payment/pending'   
      },
    };

    const transaction = await this.snap.createTransaction(parameter);

    return transaction.token;
  }
}

export default new MidtransRepository();
