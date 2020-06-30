update typscript: npm install -g typescript@latest
update version angular: ng update



--------------------
      @angular/cli                              8.3.14 -> 10.0.0         ng update @angular/cli
      @angular/core                             8.2.12 -> 10.0.0         ng update @angular/core
      @nguniversal/aspnetcore-engine            8.1.1 -> 8.2.6           ng update @nguniversal/aspnetcore-engine
      rxjs                                      6.5.4 -> 6.5.5           ng update rxjs



  ===========================================================================================
   1.Create coponent: ng generate component my-component --no-spec

   2.Create service:  ng g service ../app/fetch-data/fetch-data2 --skipTests=true
   3.Create service and provider into module:     ng g service backendApi --module=app.module

   4.To create a component as part of a module you should
    ng g module newModule to generate a module,
    cd newModule to change directory into the newModule folder
    ng g component newComponent to create a component as a child of the module.

    ng g c new-module/component-test --module=new-module/new-module.module.ts

    ng g c testComponent --module=/src/app/home/test-component/test-component.module
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