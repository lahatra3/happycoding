import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PartoneComponent } from './components/partone/partone.component';
import { ParttwoComponent } from './components/parttwo/parttwo.component';
import { PartthreeComponent } from './components/partthree/partthree.component';

@NgModule({
  declarations: [
    HomeComponent,
    PartoneComponent,
    ParttwoComponent,
    PartthreeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
