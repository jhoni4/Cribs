import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from './card/card.component';
import { AddlistingComponent } from './addlisting/addlisting.component';

import { SortbyPipe } from './pipes/sortby.pipe';
import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    AddlistingComponent,
    SortbyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CribsService,
    UtilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
