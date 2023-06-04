// const { Command } = require("commander");
const { listContacts, getContactById, removeContact, addContact } = require("./db");

// const program = new Command();
// program
//     .option("-a, --action <type>", "choose action")
//     .option("-i, --id <type>", "user id")
//     .option("-n, --name <type>", "user name")
//     .option("-e, --email <type>", "user email")
//     .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const allContacts = await listContacts();
            return allContacts;
        break;

        case "get":
            const contactById = await getContactById(id);
            return contactById;            
        break;

        case "add":
            const addedContact = await addContact(name, email, phone);
            return addedContact;              
        break;

        case "remove":
            const removedContact = await removeContact(id);
            return removedContact;   
        break;

        default:
        console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction({action: 'list'});