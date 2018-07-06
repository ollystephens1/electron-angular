import { User } from './user';
import { Client } from './client';

export class Project {
  _id: string;
  name: string;
  description: string;
  client: Client;
  users: User[];
  createdAt: Date;
  updatedAt: Date;
  createdBy: User;
  updatedBy: User;

  constructor(props?: any) {
    if (props) {
      this._id = props._id;
      this.name = props.name || '';
      this.description = props.description || '';
      this.client = props.client;
      this.createdAt = props.createdAt || new Date();
      this.updatedAt = props.updatedAt || new Date();
      this.createdBy = props.createdBy;
      this.updatedBy = props.updatedBy;
    }
  }
}
