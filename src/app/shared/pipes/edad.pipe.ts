import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'edad'
})

export class EdadPipe implements PipeTransform{
    transform(anio: any) {
        let nowDate = new Date(Date.now());
        let nowAnio = nowDate.getFullYear();
        let calculate = anio != '' ? nowAnio - anio : 'No registrado';
        return calculate;
    }
    
}