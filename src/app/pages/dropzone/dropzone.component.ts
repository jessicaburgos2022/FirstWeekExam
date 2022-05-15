import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {

  files: File[] = [];
  public isCollapsed = false;
  public isMenuCollapsed = true;
  closeResult = '';
  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    const formData = new FormData();

    for (var i = 0; i < this.files.length; i++) { 
      formData.append("file[]", this.files[i]);
    }

    this.http.post('http://localhost:8001/upload.php', formData)
    .subscribe(res => {
       console.log(res);
       alert('Uploaded Successfully.');
    })
}

onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
}


open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
