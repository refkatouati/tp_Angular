import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http: HttpClient) {
    
   }
  getProduits() {
    return this.http.get(" http://chakerbm.tn/services/produits.php ");
  }
  addProduits(prod: any) {
    return this.http.post("http://chakerbm.tn/services/addProduit.php", prod);
  }
  deleteProduits(id: number) {
    return this.http.get("http://chakerbm.tn/services/deleteProduit.php?id=" + id);
  }
}
