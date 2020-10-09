
import { Component, OnInit } from '@angular/core';
import { DataPostService } from "../data-post.service";
import { ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  motivo = {
    estado: '',
    tipo: '',
    des_motivo: '',

  }

  constructor(private ruta: ActivatedRoute,private dataPostService: DataPostService) { }

  ngOnInit(): void {
    this.ruta.params.subscribe((params: Params) => {      
      let valor = this.dataPostService.getDataById(params.id)
      valor.then(res => {
        this.motivo = res})
      
    })
  }

  UpdateMotivo() {
    console.log(this.motivo)
    let valor = this.dataPostService.updData(this.motivo)      
  }

}
