import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaymentDetail } from '../models/payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  //public formData: PaymentDetail;
  readonly rootURL = 'http://localhost:53899/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) {

  }

  postPaymentDetail(formData:PaymentDetail ) {
    return this.http.post(this.rootURL + '/PaymentDetails/AddPaymentDetail', formData);
  }
  putPaymentDetail(formData: PaymentDetail ) {
    return this.http.put(this.rootURL + '/PaymentDetails/' + formData.pmId, formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rootURL + '/PaymentDetails/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetails')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }




}
