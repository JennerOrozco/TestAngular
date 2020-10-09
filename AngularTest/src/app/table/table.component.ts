
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { DataPostService } from "../data-post.service";
import { Subject } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit {

  constructor(private dataPostService: DataPostService) { }
  
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  datos=[]
  
  
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',      
      processing: true
    }

    this.dataPostService.getData()
      .subscribe((datos) =>{
       this.datos = datos       
      });   

  }
  ngAfterViewInit(){    
    setTimeout(() => {
      this.dtTrigger.next()
    }, 1000);    
    }

  DeleteData(id) {   
      
      let valor = this.dataPostService.delData(id)      
      this.datos= this.datos.filter(obj => obj.motivo != id)    
    }

}
