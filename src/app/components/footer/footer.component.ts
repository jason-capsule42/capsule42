import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightYear = 2016;

  constructor() { }

  ngOnInit(): void {
    this.copyrightYear = new Date().getFullYear();
  }

}
