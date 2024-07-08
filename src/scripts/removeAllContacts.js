import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const deletedContacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(deletedContacts, undefined, 2));
    console.log(`All contacts have been removed from ${PATH_DB}`);
  } catch (error) {
    console.error(`Error deleting contacts: ${error}`);
    throw error;
  }
};

removeAllContacts();
