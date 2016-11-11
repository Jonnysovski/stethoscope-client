import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public searchTerm: string;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  searchWorkstation() {
    if (this.searchTerm && this.searchTerm.trim()) {
      this._router.navigate(['/workstation', this.searchTerm.trim()]);
    } else {
      this._router.navigate(['']);
    }
  }

}
