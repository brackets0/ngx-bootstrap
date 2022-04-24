import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-12 col-md-4 form-group">
          <input type="text"
                placeholder="Datepicker"
                class="form-control"
                bsDatepicker>
        </div>
        <div class="col-xs-12 col-12 col-md-4 form-group">
          <input type="text"
                placeholder="Daterangepicker"
                class="form-control"
                bsDaterangepicker>
        </div>
      </div>
    </div>
  `,
  styles: [``],
})
export class HelloComponent {}
