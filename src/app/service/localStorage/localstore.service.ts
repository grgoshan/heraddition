import { Inject, Injectable } from '@angular/core';
import {SESSION_STORAGE, StorageService, LOCAL_STORAGE} from 'ngx-webstorage-service';
import {BehaviorSubject} from 'rxjs';

const STORAGE_USERNAME = 'USER_VAL';
const STORAGE_USER_TOKEN = 'USER_t'
@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {
  private usernameSource = new BehaviorSubject('');
  currentusername = this.usernameSource.asObservable();
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

public getUsername(): string {
    const username: string = this.storage.get(STORAGE_USERNAME);
    return username;
}

public setUsername(username) {
    this.storage.set(STORAGE_USERNAME, username);
}

  public getToken(): string {
    const token: string = this.storage.get(STORAGE_USER_TOKEN) || '0';
    return token;
  }

  public setToken(token) {
    this.storage.set(STORAGE_USER_TOKEN, token);
  }
  public providetoSetUsername(username) {
    this.usernameSource.next(username);
  }


}
