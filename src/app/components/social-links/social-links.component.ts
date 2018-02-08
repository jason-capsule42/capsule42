import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (<any>$(window)).scroll(function() {
      const startPos = 320;
      const stopPos = 365;

      if ((<any>$(window)).scrollTop() >= startPos) {
        (<any>$('app-social-links')).addClass('lock');
        (<any>$('.grid')).css({ 'line-height': 45 + 'px' });
        (<any>$('.grid a')).css({ 'font-size': 15 + 'px' });

        if ((<any>$(window)).scrollTop() <= stopPos) {
          const calc = 45 + stopPos - (<any>$(window)).scrollTop();

          (<any>$('.grid')).css({ 'line-height': calc + 'px' });
          (<any>$('.grid a')).css({ 'font-size': calc / 3 + 'px' });

          (<any>$('.social-spacer')).css({ 'height': 10 + calc + 'px' });
        }

      } else {
        (<any>$('app-social-links')).removeClass('lock');
        (<any>$('.grid')).css({ 'line-height': 90 + 'px' });
        (<any>$('.grid a')).css({ 'font-size': 30 + 'px' });

        (<any>$('.social-spacer')).css({ 'height': 0 + 'px' });
      }
    });
  }

}
