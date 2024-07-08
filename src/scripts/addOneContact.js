import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        const newContact = createFakeContact();
        contacts.push(newContact);
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
        console.log(`new contact added`);
    } catch (error){
        console.error(`Error adding contact: ${error}`);
    }
};

addOneContact();
