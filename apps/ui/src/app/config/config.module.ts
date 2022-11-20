import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { RouterModule } from '@angular/router';
import { configRoutes } from './config.routes';

@NgModule({
  declarations: [ConfigComponent],
  imports: [CommonModule, RouterModule.forChild(configRoutes)],
})
export class ConfigModule {}
