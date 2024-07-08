import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        const contactCount = contacts.length;
        return contactCount;
    } catch (error) {
        console.error(`Error counting ccoontacts: ${error}`);
        throw error;
    }
};

console.log(await countContacts());
