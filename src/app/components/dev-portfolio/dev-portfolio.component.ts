import { Component, ViewChildren, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dev-portfolio',
  templateUrl: './dev-portfolio.component.html',
  styleUrls: ['./dev-portfolio.component.scss']
})
export class DevPortfolioComponent implements OnInit, AfterViewInit {

  sitesLoaded = [];

  sites = [
    {
      type: 'web',
      label: 'Whipir',
      description: '',
      tab: 'Whispir',
      image: 'assets/images/portfolio/whispir.gif',
      image_alt: 'whispir.com',
      url: 'http://www.whispir.com'
    },
    {
      type: 'web',
      label: 'Verathon',
      description: '',
      tab: 'Verathon',
      image: 'assets/images/portfolio/verathon.gif',
      image_alt: 'verathon.com'
    },
    {
      type: 'web',
      label: 'Get PiMP',
      description: '',
      tab: 'Get PiMP',
      image: 'assets/images/portfolio/verathon.gif',
      image_alt: 'getpimp.org'
    },
    {
      type: 'mobile-app',
      label: 'Vizualiiz',
      description: '',
      tab: 'Scout | Vizualiiz',
      image: 'assets/images/portfolio/scout.gif',
      image_alt: 'Scout App'
    }
  ];

  @ViewChildren('portfolioSites') pSites: any;

  @HostListener('window:resize') resize() {
    this.resizeWebFrames();
    this.resizeAppFrames();
  }

  constructor() { }
  resizeAppFrames() {
    let smallest = 0;

    (<any>$('.frame.mobile-app img')).each(function() {
      const h = (<any>$(this)).height();

      if (h < smallest || smallest === 0) {
        smallest = h;
      }
    });

    (<any>$('.frame.mobile-app')).each(function() {
      (<any>$(this)).height(smallest);
    });

    if (smallest < 20) {
      setTimeout(() => {
        this.resizeAppFrames();

      }, 500);
    }
  }

  resizeWebFrames() {
    let smallest = 0;

    (<any>$('.frame.web img')).each(function() {

      const h = (<any>$(this)).height();

      if (h < smallest || smallest === 0) {
        smallest = h;
      }
    });

    (<any>$('.frame.web')).each(function() {
      (<any>$(this)).height(smallest + 44);
    });

    if (smallest < 20) {
      setTimeout(() => {
        this.resizeWebFrames();

      }, 500);
    }
  }

  ngAfterViewInit() {
    this.resizeWebFrames();
    this.resizeAppFrames();
  }

  ngOnInit() {
  }

}
