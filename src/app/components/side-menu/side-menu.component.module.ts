import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SideMenuComponent } from './side-menu.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [SideMenuComponent],
	imports: [CommonModule, MatProgressSpinnerModule, MatExpansionModule, MatIconModule],
	exports: [SideMenuComponent],
})
export class SideMenuComponentModule {}
