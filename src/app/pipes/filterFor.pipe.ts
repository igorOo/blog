import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'filterFor',
    pure: false,
})
export default class FilterForPipe implements PipeTransform{
    transform(value: any, start?: number, end?: number): any {
        let result = []
        if (Object.keys(value).length){
            if (start != undefined){
                if (end != undefined){
                    for (let i=start; i<=end; i++){
                        result.push(value[i]);
                    }
                    if (value>=start && value<end){
                        result.push(value)
                    }
                }else{
                    result.push(value[start])
                }
            }
        }
        return result
    }

}
