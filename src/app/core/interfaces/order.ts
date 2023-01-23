import {User} from "./user";
import {Data} from "@angular/router";

export interface Order {
  id: number;
  items: any;
  user:User;
  subTotal: number;
  pending: boolean;
  createdAt: Data;
  updateAt: Data;
  deleteAt: Data;

}
