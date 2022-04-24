import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'hello',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-12 col-md-4 form-group">
          <input type="text"
                placeholder="Datepicker"
                class="form-control"
                bsDatepicker
                [bsConfig]="{ isAnimated: true }"
          >
        </div>
        <div class="col-xs-12 col-12 col-md-4 form-group">
          <input type="text"
                placeholder="Daterangepicker"
                class="form-control"
                bsDatepicker
                bsDaterangepicker
                [bsConfig]="{ isAnimated: true }"
            >
        </div>
      </div>
    </div>
    <div class="dummy"></div>
  `,
  styles: [`
  .dummy {
    border: solid 1px #000;
    height: 100vh;
  }
  `],
})
export class HelloComponent {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker: BsDatepickerDirective;
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker.hide();
  }
}
