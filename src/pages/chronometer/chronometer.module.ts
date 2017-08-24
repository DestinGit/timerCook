import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChronometerPage } from './chronometer';

@NgModule({
  declarations: [
    ChronometerPage,
  ],
  imports: [
    IonicPageModule.forChild(ChronometerPage),
  ],
})
export class ChronometerPageModule {}
