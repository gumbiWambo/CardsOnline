import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from './rules/rules.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RulesComponent],
  exports: [RulesComponent]
})
export class RulesModule { }
