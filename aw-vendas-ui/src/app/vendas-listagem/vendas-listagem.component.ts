import { Component, OnInit } from '@angular/core';

import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-vendas-listagem',
  templateUrl: './vendas-listagem.component.html',
  styleUrls: ['./vendas-listagem.component.css']
})
export class VendasListagemComponent implements OnInit {

  vendas: Array<any>;

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
    this.vendaService.listar()
      .subscribe(Response => this.vendas = Response);
  }

}
