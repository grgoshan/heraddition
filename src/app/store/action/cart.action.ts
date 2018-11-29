import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Cart} from '../../model/cart';

export const CREATE_CART = 'Cart_Create';
export const DELETE_CART = 'Cart_Delete';

export class CreateCart implements Action {
  readonly type = CREATE_CART;
  constructor(public payload: Cart) {}
}

export class DeleteCart implements Action {
  readonly type = DELETE_CART;
  constructor(public id: string) {}
}

export type Actions = CreateCart | DeleteCart ;
