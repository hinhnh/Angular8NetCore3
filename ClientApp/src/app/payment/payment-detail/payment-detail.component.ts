import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../../payment/payment-detail.service';

import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../models/payment-detail.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  public formData: PaymentDetail = new PaymentDetail();
  constructor( public service: PaymentDetailService) { }

  ngOnInit() {
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();

    this.formData = {
      pmId: 0,
      cardOwnerName: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    }
  }  


  onSubmit(form: NgForm) {
    //alert(1);
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail(this.formData).subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => { console.log(err); }
    )
  }



}
