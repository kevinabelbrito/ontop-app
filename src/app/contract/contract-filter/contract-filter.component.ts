import { Component, OnInit } from '@angular/core';
import { faSearch, faSlidersH, faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contract-filter',
  templateUrl: './contract-filter.component.html',
  styleUrls: ['./contract-filter.component.css']
})
export class ContractFilterComponent implements OnInit {

  faSearch = faSearch
  faSlidersH = faSlidersH
  faPlus = faPlus

  constructor() { }

  ngOnInit(): void {
  }

}
