import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceRoutingModule } from './annonce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';



@NgModule({
  declarations: [
    AnnonceComponent,
    ListAnnonceComponent],
  imports: [
    CommonModule,
    AnnonceRoutingModule
  ]
})
export class AnnonceModule { }
