import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PaymentDetailService } from './payment/payment-detail.service';
import { LoaderInterceptor } from './share/interceptors/loader-interceptor.service';
import { AlertModule } from './share/components/alert';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentDetailComponent } from './payment/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment/payment-detail-list/payment-detail-list.component';
import { TestComponent } from './test/test.component';
import { MyLoaderComponent } from './share/components/my-loader/my-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PaymentComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    TestComponent,
    MyLoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AlertModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'payment', component: PaymentComponent }
    ])
  ],
  providers: [PaymentDetailService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
