import { User } from './user';

export interface Activity {
  time: Date;
  title: string;
  description?: string;
  user: User;
  createdAt: Date;
}
