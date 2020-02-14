import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Servicios
import { SettingsService, SharedService, SidebarService } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ]
})

export class ServiceModule { }
