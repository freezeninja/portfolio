import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], TString: any, category: any): any[] {
    let result = [];
    if(TString == 'all'|| category == 'all'){
      return value;
    }

    for(const item of value){
      if(item[category] == TString){
        result.push(item)
      }
    }
    return result;
  }

}
