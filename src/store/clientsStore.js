import { defineStore } from 'pinia';

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [
      {
        name: 'Client 1',
        document: 123456789,
        phone: 987654321,
        email: 'client1@email.com',
        active: true,
      },
      {
        name: 'Client 2',
        document: 987654321,
        phone: 123456789,
        email: 'client2@email.com',
        active: true,
      },
      {
        name: 'Client 3',
        document: 555555555,
        phone: 111111111,
        email: 'client3@email.com',
        active: true,
      },
    ],
  }),

  actions: {
    createClient(newClient) {
      this.clients.push(newClient);
    },

    updateClient(updatedClient) {
      const index = this.clients.findIndex(client => client.document === updatedClient.document);
      if (index !== -1) {
        this.clients[index] = updatedClient;
      }
    },

    deleteClient(clientDocument) {
      this.clients = this.clients.filter(client => client.document !== clientDocument);
    },
  },
});
