import crypto from 'crypto';
import config from '../utils/env';

export function verifyMidtransSignature(payload: { order_id: string; status_code: string; gross_amount: string; signature_key: string }) {
  const { order_id, status_code, gross_amount, signature_key } = payload;

  const serverKey = config.MIDTRANS_SERVER_KEY!;

  const hash = crypto
    .createHash('sha512')
    .update(order_id + status_code + gross_amount + serverKey)
    .digest('hex');

  return hash === signature_key;
}

export function mapMidtransStatus(status: string) {
  switch (status) {
    case 'settlement':
      return 'PAID';
    case 'pending':
      return 'PENDING';
    case 'expire':
      return 'EXPIRED';
    case 'cancel':
    case 'deny':
      return 'FAILED';
    default:
      return 'PENDING';
  }
}

export function generateOrderId() {
  return `ORDER-${Date.now()}`;
}
