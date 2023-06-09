const {readFile, writeFile} = require('fs').promises;
const { nanoid } = require('nanoid');
const path = require('path');


const contactsPath = path.join(__dirname, "./db/contacts.json");


async function listContacts() {
    try {
        const contacts = await readFile(contactsPath, 'utf-8');
        return JSON.parse(contacts);
    } catch (error) {
        console.log(error);
    }
};


async function getContactById(contactId) {
    try {
        const data = await listContacts();
        const contactById = data.find((contact) => contact.id === contactId);
        return contactById || null;        
    } catch (error) {
        console.log(error);
    }
};


async function removeContact(contactId) {
    try {
        const data = await listContacts();
        const index = data.findIndex(contact => contact.id === contactId);
        if (index === -1) {
            return null;
        }

        const [result] = data.splice(index, 1)
        await writeFile(contactsPath, JSON.stringify(data, null, 2));
        return result;      
    } catch (error) {
        console.log(error);
    }
};


async function addContact(name, email, phone) {
    try {
        const data = await listContacts();
        const newContact = {
            id: nanoid(),
            name,
            email,
            phone
        };
        data.push(newContact);
        await writeFile(contactsPath, JSON.stringify(data, null, 2));
        return newContact;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};