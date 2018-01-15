import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  products = [];
  title;


  constructor(
    private productService : ProductService
  ) {

  }

  ngOnInit() {
    this.productService.get().subscribe(data => {
      this.products = data;
    });
  }

}
