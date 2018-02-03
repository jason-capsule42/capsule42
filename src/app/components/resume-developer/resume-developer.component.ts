import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-developer',
  templateUrl: './resume-developer.component.html',
  styleUrls: ['./resume-developer.component.scss']
})
export class ResumeDeveloperComponent implements OnInit {

  jobs = [
    {
      dates: '2016 - Present',
      title: 'Business Owner, Web Developer',
      company: 'Capsule 42, LLC',
      info: 'Freelance web design & development'
    },
    {
      dates: '2015 - 2016',
      title: 'Dev Lead, Sr. Web Developer',
      company: 'Vizualiiz, Inc.',
      info: 'Web design & development, iOS & Android app development'
    },
    {
      dates: '2014 - 2015',
      title: 'Web Developer, Content Manager',
      company: 'Verathon, Inc.',
      info: 'CMS architecture & development, content management, feature design & development'
    },
    {
      dates: '2013 - 2014',
      title: 'Web Developer, Email Developer',
      company: 'Classmates.com, Memory Lane',
      info: 'Weekly content development HTML Email development'
    },
    {
      dates: '2011 - 2013',
      title: 'Release Manager, Content Developer',
      company: 'Microsoft – MSN.com',
      info: 'Weekly content release management HTML content development and conversion'
    },
    {
      dates: '2007 - 2010',
      title: 'Test Engineer, Web Developer',
      company: 'Microsoft Hardware – Mouse and Keyboard',
      info: 'Software test planning, execution and reporting UI development on product web site'
    },
    {
      dates: '2001 - 2007',
      title: 'Test Engineer',
      company: 'Microsoft Games Studio',
      info: 'Software test planning, execution and reporting'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
