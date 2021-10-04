import { Component, OnInit } from '@angular/core';
import { faWallet, faBars } from '@fortawesome/free-solid-svg-icons'
import { faUser, faFileAlt, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {

  faUser = faUser
  faFileAlt = faFileAlt
  faWallet = faWallet
  faCalendarAlt = faCalendarAlt
  faBars = faBars

  constructor() { }

  ngOnInit(): void {
  }

}
