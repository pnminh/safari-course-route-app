import { User } from './user.model';

export interface Meeting{
  id:string;
  name:string,
  description:string,
  time:Date,
  users:User[]
}
