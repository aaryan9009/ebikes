import { Client, Account } from './node_modules/appwrite/dist/esm/sdk';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('661e3a5fb7fa5a3b8fed'); 

export const account = new Account(client);
export { ID } from 'appwrite';
