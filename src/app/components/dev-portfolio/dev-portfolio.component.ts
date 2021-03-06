import { Component, ViewChildren, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dev-portfolio',
  templateUrl: './dev-portfolio.component.html',
  styleUrls: ['./dev-portfolio.component.scss']
})
export class DevPortfolioComponent implements OnInit, AfterViewInit {

  public test;

  people = [
    { id: 1, name: { forename: 'John', surname: 'Doe' } },
    { id: 2, name: { forename: 'John', surname: 'Smith' } },
    { id: 3, name: { forename: 'Peter', surname: 'Scott' } },
    { id: 4, name: { forename: 'Sue', surname: 'Reece' } }
  ];

  sites: Object[] = [];

  sitesTest = [
    {
      id: 1,
      data: {
        type: 'web',
        label: 'Whipir',
        description: '',
        tab: 'Whispir',
        image: 'assets/images/portfolio/whispir.gif',
        image_alt: 'whispir.com',
        url: 'http://www.whispir.com'
      }
    },
    {
      id: 2,
      data: {
        type: 'web',
        label: 'Verathon',
        description: '',
        tab: 'Verathon',
        image: 'assets/images/portfolio/verathon.gif',
        image_alt: 'verathon.com'
      }
    },
    {
      id: 3,
      data: {
        type: 'web',
        label: 'Get PiMP',
        description: '',
        tab: 'Get PiMP',
        image: 'assets/images/portfolio/pimp.gif',
        image_alt: 'getpimp.org'
      }
    },
    {
      id: 4,
      data: {
        type: 'mobile-app',
        label: 'Vizualiiz',
        description: '',
        tab: 'Scout | Vizualiiz',
        image: 'assets/images/portfolio/scout.gif',
        image_alt: 'Scout App'
      }
    }
  ];

  sitesList = [
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
      image: 'assets/images/portfolio/pimp.gif',
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

  gigs = [
    {
      image: '',
      icon: 'msn',
      iconType: 'monoSocialIcons',
      imgUrl: '',
      label: 'msn | autos'
    },
    {
      image: '',
      icon: '',
      iconType: 'socicon-microsoft',
      imgUrl: '',
      label: 'Microsoft | Hardware'
    },
    {
      image: '',
      icon: '',
      iconType: '',
      imgUrl: '',
      label: 'Classmates.com'
    },
    {
      image: '',
      icon: '',
      iconType: '',
      imgUrl: 'assets/images/portfolio/cbe-logo.png',
      label: ''
    },
    {
      image: '',
      icon: '',
      iconType: '',
      imgUrl: 'assets/images/portfolio/cascadia.png',
      label: ''
    }
  ];

  @ViewChildren('portfolioSites') pSites: any;

  @HostListener('window:resize') resize() {
    this.resizeWebFrames();
    this.resizeAppFrames();
  }

  constructor() {
    this.test = Object.keys(this.sitesList);
  }

  trackBySite(index: number, site: any) {
    return site.id;
  }

  trackByPeople(index: number, person: any) {
    return person.id;
  }

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
    for (let i = 0; i < this.sitesList.length; i++) {
      // console.log(this.sitesList[i]);
      this.sites.push(this.sitesList[i]);
    }
  }

}
