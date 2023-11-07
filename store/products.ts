import { defineStore } from 'pinia'

export interface ProductPayloadInterface {
  id: string,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

interface productState {
  products: ProductPayloadInterface[],
  limit: number
}

export const useProductStore = defineStore('products', {
  state: (): productState => ({
    products: [],
    limit: 20
  }),
  actions: {
    async fetchProducts(): Promise<ProductPayloadInterface[]> {
      try {
        const response = await fetch(useEndpoint('products', {
          limit: 12
        }));
        const data = await response.json()
        if (data && data.products) {
          this.products = data.products
          return data.products as ProductPayloadInterface[]
        } else {
          throw new Error('Data structure is not as expected')
        }
      } catch (err) {
        console.warn(err)
        return [] as ProductPayloadInterface[]
      }
    }
  }
})