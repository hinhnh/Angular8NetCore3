﻿update typscript: npm install -g typescript@latest
update version angular: ng update



--------------------
      @angular/cli                              8.3.14 -> 10.0.0         ng update @angular/cli
      @angular/core                             8.2.12 -> 10.0.0         ng update @angular/core
      @nguniversal/aspnetcore-engine            8.1.1 -> 8.2.6           ng update @nguniversal/aspnetcore-engine
      rxjs                                      6.5.4 -> 6.5.5           ng update rxjs



  ===========================================================================================
   1.Create coponent: ng generate component my-component --no-spec

   2.Create service:  ng g service ../app/fetch-data/fetch-data2 --skipTests=true
    ng generate service share/services/loader --skipTests=true
    ng g s payment/payment-detail -skipTests
   3.Create service and provider into module:     ng g service backendApi --module=app.module
    Create Compomemt:                              ng generate component componentName --module=app.module
    

   4.To create a component as part of a module you should
    ng g module newModule to generate a module,
    cd newModule to change directory into the newModule folder
    ng g component newComponent to create a component as a child of the module.

    ng g c new-module/component-test --module=new-module/new-module.module.ts

    ng g c testComponent --module=/src/app/home/test-component/test-component.module
    ng g component component-name --skip-import
    ng g c test --skip-import
    ng g c test --module=app.module



    //parent component
     ng g c payment-details -s --skipTests
    //child components
        ng g c payment/payment-detail -s --skipTests
        ng g c payment-details/payment-detail-list -s --skipTests


    5. Create class with type=model:
    ng g class shared/payment-detail --type=model --skipTests

    6. Create molule routing: 
       ng g m [ModuleName] --routing

    7.Create our Angular app without all the *.spec.ts, *.css, *.html files. Everything will be inline
     ng new project-name --minimal
    ==================================================================================================

    
Install package:
1.Microsoft.EntityFrameworkCore
2.dotnet add package Microsoft.EntityFrameworkCore.SqlServer
3.Install-Package Microsoft.EntityFrameworkCore.Tools: to use Migration
4.dotnet add package Microsoft.EntityFrameworkCore.Design
5.Microsoft.IdentityModel.Tokens
6.Microsoft.Extensions.Identity.Core
7.Microsoft.AspNetCore.Authentication.JwtBearer 3.1.5.
8.Microsoft.AspNetCore.Authentication.JwtBearer
9.Microsoft.AspNetCore.Identity.EntityFrameworkCore



step1: enable-migration
step2 scripts create or update data base with migration:  add-migration CreateSchoolDB
step3 run  command: update-database –verbose
 ==================================================================================================
 
  Install Ng Bootstrap
  Step1: npm install --save @ng-bootstrap/ng-bootstrap
  Step2: Import Module
   import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { AppComponent } from './app.component';
  
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
   
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }