import {User} from "./user";

export interface Order {
  id: number;
  items: any;
  user:User;
  subTotal: number;
  pending: boolean;
  createdAt: Date;
  updateAt: Date;
  deleteAt: Date;

}
