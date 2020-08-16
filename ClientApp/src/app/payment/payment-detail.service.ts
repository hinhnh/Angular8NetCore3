import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaymentDetail } from '../models/payment-detail.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  public shareData: PaymentDetail;
  readonly rootURL = 'http://localhost:53899/api';
  list: PaymentDetail[];

  constructor(private http: HttpClient) {

  }

  getPaymentDetails(): Observable<PaymentDetail[]> {
    return this.http.get<PaymentDetail[]>('api/PaymentDetails/GetPaymentDetails');

  }

  insertPaymentDetail(formData:PaymentDetail ) {
    return this.http.post(this.rootURL + '/PaymentDetails/AddPaymentDetail', formData);
  }


  updatePaymentDetail(formData: PaymentDetail ) {
    return this.http.put(this.rootURL + '/PaymentDetails/UpdatePaymentDetail', formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(this.rootURL + '/PaymentDetails/DeletePayment/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/PaymentDetails')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
  
}
