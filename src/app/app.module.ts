import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContractComponent } from './contract/contract.component';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ContractFilterComponent } from './contract/contract-filter/contract-filter.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    MenuHeaderComponent,
    ContractFilterComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
