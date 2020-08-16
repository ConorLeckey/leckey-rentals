import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatNativeDateModule, MatSelectModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import {BookingDialogComponent} from './booking-dialog/booking-dialog.component';
import {TeamComponent} from './team/team.component';
import {ContactComponent} from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarThumbnailComponent} from './car-thumbnail.component';
import {CarDetailsComponent} from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BookingDialogComponent,
    TeamComponent,
    ContactComponent,
    CarThumbnailComponent,
    CarDetailsComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    MatTableModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BookingDialogComponent]
})
export class AppModule {
}
