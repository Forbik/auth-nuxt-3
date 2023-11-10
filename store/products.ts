import { defineStore } from 'pinia'

export interface ProductPayloadInterface {
  id: number,
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
  currentProduct: ProductPayloadInterface | null,
  limit: number,
  total: number
}

export const useProductStore = defineStore('products', {
  state: (): productState => ({
    products: [],
    currentProduct: null,
    limit: 12,
    total: 0
  }),
  actions: {
    async fetchProducts (limit: number = 12): Promise<ProductPayloadInterface[]> {
      try {
        const response = await fetch(useEndpoint('products', {
          limit
        }))
        const data = await response.json()
        if (data && data.products) {
          this.products = data.products
          this.total = data.total
          return data.products as ProductPayloadInterface[]
        } else {
          throw new Error('Data structure is not as expected')
        }
      } catch (err) {
        console.warn(err)
        return [] as ProductPayloadInterface[]
      }
    },
    async fetchProductById (id: number): Promise<ProductPayloadInterface> {
      try {
        const response = await fetch(useEndpoint(`products/${id}`))
        const product: ProductPayloadInterface = await response.json()
        if (product) {
          this.currentProduct = product
          return product as ProductPayloadInterface
        } else {
          throw new Error('Data structure is not as expected')
        }
      } catch (err) {
        console.warn(err)
        return {} as ProductPayloadInterface
      }
    }
  }
})
