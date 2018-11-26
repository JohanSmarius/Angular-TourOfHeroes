import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: string[] = [];

  constructor() { }

  addMessage(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
