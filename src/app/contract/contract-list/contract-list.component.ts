import { Component, OnInit } from '@angular/core';
import { faEdit, faSignature, faEllipsisV, faEllipsisH, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt, faTrashAlt } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  faEdit = faEdit
  faSignature = faSignature
  faTrashAlt = faTrashAlt
  faEllipsisV = faEllipsisV
  faEllipsisH = faEllipsisH
  faFileAlt = faFileAlt
  faCircle = faCircle

  constructor() { }

  ngOnInit(): void {
  }

}
