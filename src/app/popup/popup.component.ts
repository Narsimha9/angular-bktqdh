import { Component, Inject, Input, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { MatTableModule } from '@angular/material/table';

export interface UserData {
  name: string;
  company: string;
  x: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  @Input() dataset: Array<any> = [];
  displayedColumns = ['x', 'y', 'z', 'xyz'];
  // dataSource = this.dataset;

  dataSource: UserData[] = [
    { name: 'Hydrogen', company: '1.0079', x: 'H' },
    { name: 'Helium', company: '4.0026', x: 'He' },
    { name: 'Lithium', company: '6.941', x: 'Li' },
    { name: 'Beryllium', company: '9.0122', x: 'Be' },
  ];

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log('Data received::::', this.data);
  }
}
