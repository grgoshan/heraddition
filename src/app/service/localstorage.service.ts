import { Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';

const STORAGE_KEY = 'local';
const TOKEN_STORAGE = 'TOKEN';
const USER_NAME = 'UNKNOWN'

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  anotherTodoList = [];
  currentToken = '0';
  username;

  constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }


  public storeOnLocalStorage(taskTitle: String): void {
    //get array of tasks from local storage
    const currentTodoList = this.storage.get(STORAGE_KEY) || [];

    // push new task to array
    currentTodoList.push({
      title: taskTitle,
      isChecked: false
    });

    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, currentTodoList);

    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');

  }
  public storeToken(token): void {
   // this.currentToken = this.storage.get(TOKEN_STORAGE) || '0';
    // this.currentToken = token;
    this.storage.set(TOKEN_STORAGE, token);
  }
  public getToken() {
    return this.storage.get(TOKEN_STORAGE) || '0';
}

  public storeName(name): void {
    // this.currentToken = this.storage.get(TOKEN_STORAGE) || '';
    // this.currentToken = token;
    this.storage.set(USER_NAME, name);
  }
  public getname() {
    return this.storage.get(USER_NAME) || '';
  }
}
