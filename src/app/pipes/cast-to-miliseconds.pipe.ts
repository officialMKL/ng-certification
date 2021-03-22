import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'castToMiliseconds'
})
export class CastToMilisecondsPipe implements PipeTransform {

  transform(value: number): number {
    return value * 1000;
  }

}
