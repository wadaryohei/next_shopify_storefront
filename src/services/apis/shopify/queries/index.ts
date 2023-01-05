import { ICollections, collections } from 'services/apis/shopify/queries/collections';
import { ICollectionByHandle, collectionByHandle } from 'services/apis/shopify/queries/collectionByHandle';
import { IProduct, product } from 'services/apis/shopify/queries/product';
import { IProducts, products } from 'services/apis/shopify/queries/products';

export type { ICollectionByHandle, ICollections, IProduct, IProducts };
export { collectionByHandle, collections, product, products };
