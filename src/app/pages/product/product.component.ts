import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { productDetailInterface } from '../../interfaces/product-detail.interface';
import { InfopageService } from 'src/app/services/infopage.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : productDetailInterface ={};
  bgImage : any;

  constructor( private route : ActivatedRoute,
               public productsService : ProductsService,
               public infopageService : InfopageService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parameter => {
      this.productsService.getProduct(parameter['productID']).subscribe((product : productDetailInterface) =>{

        this.product=product;

        this.bgImage = this.product.img2;
      });
    });
  }

}
