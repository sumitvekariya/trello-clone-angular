import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-color-picker-dialog',
  templateUrl: './color-picker-dialog.component.html',
  styleUrls: ['./color-picker-dialog.component.css']
})
export class ColorPickerDialogComponent implements OnInit {

  selectedColor = '';

  constructor(
    public dialogRef: MatDialogRef<ColorPickerDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  onChangeComplete(c) {
    this.selectedColor = c.color.hex;
    console.log(c);
  }

}
