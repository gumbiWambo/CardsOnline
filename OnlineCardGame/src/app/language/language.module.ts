import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language/language.component';
import { LanguagePipe } from './language.pipe';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [LanguageComponent, LanguagePipe]
})
export class LanguageModule { }
