import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css',
})
export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, 'sidebar-open');
    this.renderer.addClass(document.body, 'sidebar-closed');

    this._table1 = $('#table1').DataTable({
      columnDefs: [
        {
          targets: 2,
          className: 'text-right',
        },
      ],
    });

    this.getData();
  }

  ngOnInit(): void {}

  getData(): void {
    console.log('getData()');

    var url =
      'https://openexchangerates.org/api/latest.json?app_id=3f05b69ffb024e46834dba5b4cc6319e';

    this.http.get(url).subscribe((data: any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, 'en-US', '', 'USD');
      console.log('USD : ' + idr2);
      var row = [1, 'USD', idr2];
      this._table1.row.add(row);

      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, 'en_US', '', 'SGD');
      console.log('SGD : ' + sgd2);
      row = [2, 'SGD', sgd2];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, 'en-US', '', 'BND');
      console.log('BND : ' + bnd2);
      row = [3, 'BND', bnd2];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(bnd, 'en-US', '', 'HKD');
      console.log('HKD : ' + hkd2);
      row = [4, 'HKD', hkd2];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, 'en-US', '', 'BTC');
      console.log('BTC : ' + btc2);
      row = [5, 'BTC', btc2];
      this._table1.row.add(row);

      var eur = rates.IDR / rates.EUR;
      var eur2 = formatCurrency(eur, 'en-US', '', 'EUR');
      console.log('EUR : ' + eur2);
      row = [6, 'EUR', eur2];
      this._table1.row.add(row);

      var xau = rates.IDR / rates.XAU;
      var xau2 = formatCurrency(xau, 'en-US', '', 'XAU');
      console.log('XAU : ' + xau2);
      row = [7, 'XAU', xau2];
      this._table1.row.add(row);

      var yer = rates.IDR / rates.YER;
      var yer2 = formatCurrency(yer, 'en-US', '', 'YER');
      console.log('YER : ' + yer2);
      row = [8, 'YER', yer2];
      this._table1.row.add(row);

      var jep = rates.IDR / rates.JEP;
      var jep2 = formatCurrency(jep, 'en-US', '', 'JEP');
      console.log('JEP : ' + jep2);
      row = [9, 'JEP', jep2];
      this._table1.row.add(row);

      var aud = rates.IDR / rates.AUD;
      var aud2 = formatCurrency(aud, 'en-US', '', 'AUD');
      console.log('AUD : ' + aud2);
      row = [10, 'AUD ', btc2];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
