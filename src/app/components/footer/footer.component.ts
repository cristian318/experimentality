import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleShow(event: any) {
    const parent = event.target.parentElement;
    if (!parent.classList.contains('footer__top-item--show')) {
      parent.classList.add('footer__top-item--show');
      parent.classList.remove('footer__top-item--hide');
    } else {
      parent.classList.add('footer__top-item--hide');
      parent.classList.remove('footer__top-item--show');
    }
  }
}
