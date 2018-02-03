import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-portfolio',
  templateUrl: './dev-portfolio.component.html',
  styleUrls: ['./dev-portfolio.component.scss']
})
export class DevPortfolioComponent implements OnInit {

  sites = [
    {
      label: 'Whipir',
      description: '',
      tab: 'Whispir',
      image: 'assets/images/portfolio/whispir.gif',
      image_alt: 'whispir.com'
    },
    {
      label: 'Verathon',
      description: '',
      tab: 'Verathon',
      image: 'assets/images/portfolio/verathon.gif',
      image_alt: 'verathon.com'
    },
    {
      label: 'Vizualiiz',
      description: '',
      tab: 'Scout | Vizualiiz',
      image: 'assets/images/portfolio/scout.gif',
      image_alt: 'Scout App'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
