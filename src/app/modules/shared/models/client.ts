import { User } from './user';

export interface Client {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;
}
