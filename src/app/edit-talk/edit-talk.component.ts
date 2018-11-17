import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
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
      tags: [talk.tags],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }

  removeTag(tag: string) {
    // Remove the tag from the tag control's value.
    const tagsControl = this.formGroup.get('tags');
    tagsControl.value.splice(tagsControl.value.indexOf(tag), 1);
  }

  addTag(event: MatChipInputEvent) {
    const tagsControl = this.formGroup.get('tags');

    // Create a new array of tags, if the talk doesn't have any,
    // otherwise add the new tag to the existing array.
    if (tagsControl.value) {
      tagsControl.value.push(event.value);
    } else {
      tagsControl.setValue([event.value]);
    }

    // Clear the input's value once the tag has been added.
    event.input.value = '';
  }

}

