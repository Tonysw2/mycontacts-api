const crypto = require('crypto');

const contacts = [
  {
    id: crypto.randomUUID(),
    name: 'Anthony',
    email: 'anthony@email.com',
    phone: '1212121212',
    category_id: crypto.randomUUID(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = { ContactsRepository: new ContactsRepository() };
