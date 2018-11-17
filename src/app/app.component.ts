import { Component } from '@angular/core';
import { BoardService, Track } from './board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _boardService: BoardService) {}

  get board() {
    return this._boardService.currentBoard;
  }

  addNewTalk(track: Track) {
    track.talks.push({
      text: 'New talk'
    });
  }
}
