import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        name: 'Product 1',
        active: true,
        id: uuidv4(),
      },
      {
        name: 'Product 2',
        active: true,
        id: uuidv4(),
      },
      {
        name: 'Product 3',
        active: false,
        id: uuidv4(),
      },
    ],
  }),

  actions: {
    createProduct(newProduct) {
      this.products.push({ id: uuidv4(), ...newProduct })
    },

    updateProduct(updatedProduct) {
      const index = this.products.findIndex((product) => product.id === updatedProduct.id);
      if (index !== -1) {
        this.products[index] = { ...this.products[index], ...updatedProduct };
      }
    },

    deleteProduct(productId) {
      this.products = this.products.filter((product) => product.id !== productId)
    },

    toggleProductStatus(productId) {
      const product = this.products.find((p) => p.id === productId)
      if (product) {
        product.active = !product.active
      }
    },
  },
})
