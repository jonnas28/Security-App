import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from './service/layout.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LayoutComponent, 
    TopbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  providers:[
    LayoutService
  ],
  exports:[LayoutComponent]
})
export class LayoutModule { }
