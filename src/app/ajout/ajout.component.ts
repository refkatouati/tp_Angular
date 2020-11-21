import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
produit:any={"id": null,"description":"","quantite":0,"prix":0.0}
  constructor( private ser:GestionService,private route:Router) { }

  ngOnInit(): void {
  }

  save(){
    let prodJSON = JSON.stringify(this.produit); 
    this.ser.addProduits(prodJSON).subscribe
    (
      data=>{ this.route.navigate(["liste"])

      },
      erreur=>{}


    )


  }
}
