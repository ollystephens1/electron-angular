import { User } from './user';
import { Project } from './project';

export interface Requirement {
  name: string;
  description: string;
  type: string;
  project: Project;
  createdBy: User;
  updatedBy: User;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
