import { Injectable } from '@angular/core';
export interface Talk {
  text: string;
  speaker?: string;
  tags?: string[];
  image?: string;
}

export interface Track {
  title: string;
  talks: Talk[];
  id: string;
}

export interface Board {
  title: string;
  tracks: Track[];
}
@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private _boards: Board[] = require('./data.json');
  currentBoard = this._boards[0];

  getBoards(): Board[] {
    return this._boards;
  }
}
