const {readFile, writeFile, appendFile, unlink} = require('fs').promises;
const path = require('path');

// const fileDir = 'node-basics-01';
const contactsPath = path.join(__dirname, 'contacts.json');


async function listContacts() {
    const contacts = await readFile(contactsPath);
    return JSON.stringify(contacts);
};

async function getContactById(contactId) {
    const allContacts = listContacts();
    const contactById = allContacts.find((contact) => contact.id === contactId);
    return contactById || null;
};


// fs.unlink(path, callback) - видалення файлу.
async function removeContact(contactId) {
    try {
        const allContacts = listContacts();
        const deletedCcontact = allContacts.find((contact) => contact.id === contactId)
        return JSON.stringify(deletedCcontact);
    } catch (error) {
        console.log(error.message);
    }
};


// fs.appendFile(filename, data, [options])- додавання у файл
async function addContact(name, email, phone) {
  // ...твій код
};


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};