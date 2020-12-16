import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  code_padding = '0px';

  typeSpeed = 100;
  tabSpeed = 500;
  autoTypeSpeed = 10;
  hesitateSpeed = 500;

  codeToWrite = [];
  codeHtml = [];

  code = [
    {
      'value': '<',
      'class': 'html-frame',
      'delay': this.typeSpeed
    },
    {
      'value': 'd',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'e',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'v',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'e',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'l',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'o',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'p',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'e',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': 'r',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': ' ',
      'class': 'break wide',
      'delay': this.typeSpeed
    },
    {
      'value': 'i',
      'class': 'attr',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'd',
      'class': 'attr',
      'delay': this.typeSpeed
    },
    {
      'value': '=',
      'class': 'equal',
      'delay': this.typeSpeed
    },
    {
      'value': '"',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'j',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'a',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 's',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'o',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'n',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': '-',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'b',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'a',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'k',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'e',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'r',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': '"',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': ' ',
      'class': 'break wide',
      'delay': this.typeSpeed
    },
    {
      'value': 'c',
      'class': 'attr',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'l',
      'class': 'attr',
      'delay': this.typeSpeed
    },
    {
      'value': 'a',
      'class': 'attr',
      'delay': this.typeSpeed
    },
    {
      'value': 's',
      'class': 'attr',
      'delay': this.typeSpeed
    },
    {
      'value': 's',
      'class': 'attr',
      'delay': this.typeSpeed
    },
    {
      'value': '=',
      'class': 'equal',
      'delay': this.typeSpeed
    },
    {
      'value': '"',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'w',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'e',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'b',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': ' ',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'w',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'e',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'b',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': '-',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'a',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'p',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'p',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': ' ',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'f',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'r',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'o',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'n',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 't',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': '-',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'e',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'n',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'd',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': ' ',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'd',
      'class': 'value',
      'delay': this.hesitateSpeed
    },
    {
      'value': 'e',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 's',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'i',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'g',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': 'n',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': '"',
      'class': 'value',
      'delay': this.typeSpeed
    },
    {
      'value': ' ',
      'class': 'element',
      'delay': this.typeSpeed
    },
    {
      'value': '/',
      'class': 'html-frame',
      'delay': this.typeSpeed
    },
    {
      'value': '>',
      'class': 'html-frame',
      'delay': this.typeSpeed
    }
  ];

  constructor() { }

  setPadding(): string {
    return this.code_padding;
  }

  insertNextCode() {
    let delay = this.codeToWrite[0].delay;

    if ((<any>$(window)).scrollTop() > 240) {
      delay = 0;
    }

    setTimeout(() => {
      this.codeHtml.push(this.codeToWrite[0]);
      this.codeToWrite.splice(0, 1);

      if (this.codeToWrite.length > 0) {
        this.insertNextCode();
      }

    }, delay);
  }

  writeCode(): void {
    this.codeToWrite = this.code;
    this.codeHtml = [];

    setTimeout(() => {
      this.insertNextCode();
    }, 1000);
  }

  ngOnInit() {
    (<any>$('.parallax')).parallax();

    (<any>$(window)).scroll(function() {
      const startPos = 260;
      const nowPos = 290;
      const lockPos = 320;
      const padding = (<any>$(window)).scrollTop() / 2;

      (<any>$('.code')).css({ 'padding-top': padding + 'px' });

      if ((<any>$(window)).scrollTop() > startPos) {
        (<any>$('.code')).addClass('fade');
      } else {
        (<any>$('.code')).removeClass('fade');
      }

      if ((<any>$(window)).scrollTop() >= lockPos) {
        (<any>$('.parallax-container')).addClass('fixed');
        (<any>$('#scroll-spacer')).addClass('active');
      } else {
        (<any>$('.parallax-container')).removeClass('fixed');
        (<any>$('#scroll-spacer')).removeClass('active');
      }

    });

    this.writeCode();
  }

}
