import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { ListStoreComponent } from './pages/store/list-store/list-store.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListStoreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent],

  entryComponents: [
    ListStoreComponent
   ]

})
export class AppModule { }
