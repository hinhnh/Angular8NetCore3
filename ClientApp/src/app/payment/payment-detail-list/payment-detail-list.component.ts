import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentDetail } from '../../models/payment-detail.model';
import { PaymentDetailService } from '../payment-detail.service';


@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  @Input() lstPaymentDetails: PaymentDetail[] = [];
  @Output() onDeleteRecord = new EventEmitter();

  constructor(private service: PaymentDetailService ) { }

  ngOnInit() {
  }

  editRecord(item: PaymentDetail) {
   const cloneItem = JSON.parse(JSON.stringify(item))
   this.service.sendSharedItem(cloneItem);
  }

  deleteRecord(item: PaymentDetail) {
    this.onDeleteRecord.emit(item.pmId);
  }

  //get data(): PaymentDetail {
  //  return this.service.shareData;
  //}
  //set data(value: PaymentDetail) {
  //   this.service.shareData = value;
  //}



}
