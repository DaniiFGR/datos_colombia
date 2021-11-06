import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'datos';
  articulos:any = null;
  dtOptions: DataTables.Settings = {};

  constructor(private ArticulosServicio: ArticulosService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      },
    };

    this.datos();
  }
  datos(){
    this.ArticulosServicio.datos().subscribe(
      result => {
        this.articulos = result;
      },
      error => {
        console.log('problemas');
      }
    );
  }
}
