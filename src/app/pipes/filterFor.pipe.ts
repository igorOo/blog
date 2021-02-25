import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'filterFor'
})
export default class FilterForPipe implements PipeTransform{
    transform(value: any, start?: number, end?: number): any {
        let result = []
        if (start != undefined){
            if (end != undefined){
                if (value>=start && value<end){
                    result.push(value)
                }
            }else{
                if (value == start){
                    result.push(value)
                }
            }
        }
        return result
    }

}
