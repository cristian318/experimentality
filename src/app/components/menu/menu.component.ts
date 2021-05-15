import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  options = [
    { name: 'Hombre' },
    { name: 'Mujer' },
    { name: 'Junior' },
    { name: 'Niños' },
    { name: 'Accesorios' },
    { name: 'Ofertas' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
