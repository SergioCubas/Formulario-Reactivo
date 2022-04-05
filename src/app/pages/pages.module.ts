import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './product/create/create.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        HomeComponent,
        ProductComponent,
        CreateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        SharedModule,
    ]
})

export class PagesModule{

}