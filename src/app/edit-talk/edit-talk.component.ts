import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Talk } from '../board.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-talk',
  templateUrl: './edit-talk.component.html',
  styleUrls: ['./edit-talk.component.scss']
})
export class EditTalkComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public talk: Talk,
    private dialogRef: MatDialogRef<EditTalkComponent>,
    public formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group({
      text: [talk.text, Validators.required],
      speaker: [talk.speaker, Validators.required],
      image: [talk.image, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }

}

