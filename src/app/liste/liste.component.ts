import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  produits: any = [];

  constructor(private serv: GestionService, private route: Router) { }

  ngOnInit(): void {
    this.serv.getProduits().subscribe(
      (data) => { this.produits = data; },
      (erreur) => { console.log(erreur); })
  }
  //letdeptJSON = JSON.stringify(this.produits); 
  delete(id: number) {
    this.serv.deleteProduits(id).subscribe(
      data => { this.ngOnInit(); 
        this.route.navigate(["liste"]) }
    )
  }


}



