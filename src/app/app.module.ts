import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { PopupComponent } from './popup/popup.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgApexchartsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatTableDataSource,
    BrowserAnimationsModule,
  ],
  declarations: [AppComponent, PopupComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
