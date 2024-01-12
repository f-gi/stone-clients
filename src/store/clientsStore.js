import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useClientsStore = defineStore('clients', {
  state: () => ({
    clients: [
      {
        name: 'Client 1',
        document: 123456789,
        phone: 987654321,
        email: 'client1@email.com',
        active: true,
        id: uuidv4(),
      },
      {
        name: 'Client 2',
        document: 987654321,
        phone: 123456789,
        email: 'client2@email.com',
        active: true,
        id: uuidv4(),
      },
      {
        name: 'Client 3',
        document: 555555555,
        phone: 111111111,
        email: 'client3@email.com',
        active: true,
        id: uuidv4(),
      },
    ],
  }),

  actions: {
    createClient(newClient) {
      this.clients.push({id: uuidv4(), ...newClient});
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
