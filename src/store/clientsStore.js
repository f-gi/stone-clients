import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [
      {
        name: 'John Doe',
        document: 12345678901,
        phone: '1234564790',
        email: 'john.doe@email.com',
        active: true,
        products: [],
        id: uuidv4(),
      },
      {
        name: 'Jane Smith',
        document: 98765432109,
        phone: '1234567890',
        email: 'jane.smith@email.com',
        active: true,
        products: [],
        id: uuidv4(),
      },
      {
        name: 'Robert Johnson',
        document: 55555555555,
        phone: '1111111111',
        email: 'robert.johnson@email.com',
        active: false,
        products: [],
        id: uuidv4(),
      },
      {
        name: 'Maria Silva',
        document: 98765432101,
        phone: '1234567890',
        email: 'maria.silva@email.com',
        active: true,
        products: [],
        id: uuidv4(),
      },
      {
        name: 'Carlos Santos',
        document: 12345678909,
        phone: '9876543210',
        email: 'carlos.santos@email.com',
        active: false,
        products: [],
        id: uuidv4(),
      },
      {
        name: 'Amanda Oliveira',
        document: 55555555501,
        phone: '11111111111',
        email: 'amanda.oliveira@email.com',
        active: true,
        products: [],
        id: uuidv4(),
      },
    ],
  }),

  actions: {
    createClient(newClient) {
      this.clients.push({ id: uuidv4(), ...newClient })
    },

    updateClient(updatedClient) {
      const index = this.clients.findIndex(
        (client) => client.id === updatedClient.id,
      )
      if (index !== -1) {
        this.clients[index] = { ...this.clients[index], ...updatedClient }
      }
    },

    deleteClient(clientId) {
      this.clients = this.clients.filter((client) => client.id !== clientId)
    },

    toggleClientStatus(clientId) {
      const client = this.clients.find((c) => c.id === clientId)
      if (client) {
        client.active = !client.active
      }
    },

    addProductsToClient(clientId, productIds) {
      const client = this.clients.find((c) => c.id === clientId)
      if (client) {
        client.products = [...client.products, ...productIds]
      }
    },

    getClientProducts(clientId) {
      const client = this.clients.find((c) => c.id === clientId);
      return client ? [...client.products] : [];
    },
  },
})
