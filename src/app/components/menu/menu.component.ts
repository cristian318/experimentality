import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Input() showMenu: boolean;

  @Output() closeEvent = new EventEmitter<boolean>();

  constructor() {
    this.showMenu = false;
  }

  ngOnInit(): void {}

  close() {
    this.closeEvent.emit(false);
  }
}
