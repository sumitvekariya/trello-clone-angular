import { Injectable } from '@angular/core';
import { Board } from './shared/models/schema.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private _boards: Board[] = require('./data.json');

  getBoards(): Board[] {
    return this._boards;
  }
}
