import { Component, OnInit } from '@angular/core';
import { DataPostService } from "../data-post.service";
import { ActivatedRoute,Params } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private ruta: ActivatedRoute,private dataPostService: DataPostService) { }
  motivo = {
    estado: '',
    tipo: '',
    des_motivo: '',

  }
  ngOnInit(): void {
  }

  AgregarMotivo() {
    console.log(this.motivo)
    let valor = this.dataPostService.addData(this.motivo)      
  }

}
