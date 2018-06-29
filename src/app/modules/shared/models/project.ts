import { User } from './user';
import { Client } from './client';

export interface Project {
  name: string;
  description: string;
  client: Client;
  users: User[];
}
