import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root.component';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule, MatToolbarModule, MatListModule, MatTabsModule, MatSidenavModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,

    FlexLayoutModule,

    /** Material Modules */
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class RootModule { }
