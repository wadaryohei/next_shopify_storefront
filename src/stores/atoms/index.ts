import { ModelCart } from 'models/response';
import { atom } from 'recoil';

//-----------------------------------------------------------------
// atom
//-----------------------------------------------------------------
export const cartAtom = atom<ModelCart>({ key: 'cartIndex', default: { lineItems: [], lineItemsCount: 0, checkoutId: null, subTotal: '', webUrl: '' } });
export const loadingAtom = atom<boolean>({ key: 'loadingIndex', default: false });
