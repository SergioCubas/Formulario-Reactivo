import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import categorias from '../../../data/categorias.json'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  /* Variables globales */
  categories:any;
  products:any = {};
  array:any = [];

  frmAddProduct = new FormGroup({
    name: new FormControl("", [Validators.required]),
    price: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

  get f(){
    return this.frmAddProduct.controls;
  }

  createProduct(){
    if(this.frmAddProduct.valid){
      this.array.push(this.frmAddProduct.value);

      this.products = this.array;
  
      this.frmAddProduct.reset();
    }
    
  }

}
