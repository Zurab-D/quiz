import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    ProfileComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
