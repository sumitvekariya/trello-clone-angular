import { Component } from '@angular/core';
import { BoardService, Track, Talk } from './board.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EditTalkComponent } from './edit-talk/edit-talk.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteTalkComponent } from './delete-talk/delete-talk.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _boardService: BoardService, private _dialog: MatDialog) {}

  get board() {
    return this._boardService.currentBoard;
  }

  addNewTalk(track: Track) {
    track.talks.push({
      text: 'New talk'
    });
  }

  /**
   * An array of all track ids. Each id is associated with a `cdkDropList` for the
   * track talks. This property can be used to connect all drop lists together.
   */
  get trackIds(): string[] {
    return this.board.tracks.map(track => track.id);
  }

  onTalkDrop(event: CdkDragDrop<Talk[]>) {
    // In case the destination container is different from the previous container, we
    // need to transfer the given talk to the target data array. This happens if
    // a talk has been dropped on a different track.
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Track[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  editTalk(talk: Talk) {
    // Use the injected dialog service to launch the previously created edit-talk
    // component. Once the dialog closes, we assign the updated talk data to
    // the specified talk.
    this._dialog.open(EditTalkComponent, {data: talk, width: '500px'})
      .afterClosed()
      .subscribe(newTalkData => Object.assign(talk, newTalkData));
  }

  deleteTalk(talk: Talk, track: Track) {
    // Open a dialog
    this._dialog.open(DeleteTalkComponent, {data: talk, width: '500px'})
      .afterClosed()
      .subscribe(response => {
        // Wait for it to close and delete the talk if the user agreed.
        if (response) {
          track.talks.splice(track.talks.indexOf(talk), 1);
        }
      });
  }
}
