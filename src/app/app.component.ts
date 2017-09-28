import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hola {{name}}</h1>
  <lch-all-parent></lch-all-parent>`,
})
export class AppComponent  { name = 'Jaime'; }
