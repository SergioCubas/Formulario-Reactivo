import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FilterComponent } from "./components/filter/filter.component";
import { FooterComponent } from "./components/footer/footer.component";


@NgModule({
    declarations:[
        FilterComponent,
        FooterComponent
    ],
    imports:[
        CommonModule
    ],
    exports:[
        FilterComponent,
        FooterComponent
    ]
})

export class SharedModule{

}