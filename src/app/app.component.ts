import { Component } from '@angular/core';
import { BoardService } from './board.service';

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
}
