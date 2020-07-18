import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  latestPosts: Feed[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private modalService: NgbModal) {
    if (baseUrl.includes("4200")) baseUrl = "http://localhost:53899/";
    http.get<Feed[]>(baseUrl + 'api/rssfeeds').subscribe(result => {
      this.latestPosts = result;
    }, error => console.error(error));

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



}

interface Feed {
  link: string;
  title: string;
  feedType: string;
  author: string;
  content: string;
  publishDate: string;
}    
