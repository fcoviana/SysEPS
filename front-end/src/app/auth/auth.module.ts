import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from '../services/auth.service';
import { FormLoginComponent } from '../compartilhado/form-login/form-login.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],

  entryComponents: [
    FormLoginComponent
   ]
})
export class AuthModule { }
