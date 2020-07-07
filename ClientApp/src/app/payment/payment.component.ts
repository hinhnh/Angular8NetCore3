import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { PaymentDetailService } from '../payment/payment-detail.service';
import { PaymentDetail } from '../models/payment-detail.model';
import { Subscription } from 'rxjs';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';
import { AlertService } from '../share/components/alert';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, OnDestroy, AfterViewInit  {

  lstPaymentDetails: PaymentDetail[] = [];
  subGetPayment: Subscription;

  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };

  /*
   { static: true } needs to be set when you want to access the ViewChild in ngOnInit.

   { static: false } it means (dynamic queries) can only be accessed in ngAfterViewInit. This is also what you want to go for when you have a structural directive (i.e. *ngIf) on your element in your template.
   */
  @ViewChild(PaymentDetailComponent, { static: false }) paymentDetailComponent: PaymentDetailComponent ;

  constructor(private paymentService: PaymentDetailService, private alertService: AlertService) { }
     

  ngOnInit() {
    this.getPaymentDetails();
  }

  //this is lifecycle hook function
  ngAfterViewInit(): void {

    //this.paymentDetailComponent.resetForm();

  }

  getPaymentDetails() {

    this.subGetPayment = this.paymentService.getPaymentDetails().subscribe(res => {

      this.lstPaymentDetails = res;
    },
      err => { console.log(err); }

    )}


  applyOnSubmitRecord(formData: PaymentDetail) {

    if (formData.pmId == 0) {
      this.insertRecord(formData);
    }
    else {
      this.updateRecord(formData);
    }

  }




  insertRecord(formData: PaymentDetail) {
    this.paymentService.insertPaymentDetail(formData).subscribe(
      res => {              
        this.alertService.success('Insert record successfully!', this.options);
        this.paymentDetailComponent.resetForm();
        this.getPaymentDetails();
      },
      err => { console.log(err); }
    )
  }

  updateRecord(formData: PaymentDetail) {
    this.paymentService.updatePaymentDetail(formData).subscribe(
      res => {
        this.alertService.success('Update record successfully!', this.options);
        this.paymentDetailComponent.resetForm();
        this.getPaymentDetails();
      },
      err => { console.log(err); }
    )

  }


  applyOnDelete(event: number) {
    console.log('value event:' + event);
    this.paymentService.deletePaymentDetail(event).subscribe(
      res => {
        this.alertService.success('Delete record successfully!', this.options);
        this.getPaymentDetails();
       
            },
      err => { console.log(err); }
    )
  }








  ngOnDestroy(): void {
    if (this.subGetPayment) this.subGetPayment.unsubscribe();
  }

}
