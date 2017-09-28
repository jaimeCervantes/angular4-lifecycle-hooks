import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hooks del ciclo de vida de un componente</h1>
  <lch-all-parent></lch-all-parent>`,
})
export class AppComponent  { name = 'Jaime'; }
