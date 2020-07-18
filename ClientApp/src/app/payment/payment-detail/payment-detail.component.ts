import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentDetailService } from '../../payment/payment-detail.service';

import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../models/payment-detail.model';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  @Output() onSubmitRecord = new EventEmitter(); 
  public formData: PaymentDetail = new PaymentDetail();


constructor(private service: PaymentDetailService) {

}

  ngOnInit() {
    this.getItem();
  }

  getItem() {
    this.service.getSharedItem().subscribe(item =>
      (this.formData = item)
    );
  }

  get data(): PaymentDetail {
    if (this.service.shareData != null) this.formData = this.service.shareData;
    return this.service.shareData;
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.formData = new PaymentDetail();
    this.service.shareData = new PaymentDetail();        
  }  

  onSubmit(form: NgForm) {
    this.onSubmitRecord.emit(this.formData);         
  }

}
