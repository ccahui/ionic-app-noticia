import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(inputDate: any): any {

    const current = new Date().valueOf();
    const input = new Date(inputDate).valueOf();
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - input;

    if (elapsed < msPerMinute) {
      return 'Hace ' + Math.round(elapsed / 1000) + ' segundos ';
    } else if (elapsed < msPerHour) {
      return 'Hace ' + Math.round(elapsed / msPerMinute) + ' minutos ';
    } else if (elapsed < msPerDay) {
      return 'Hace ' + Math.round(elapsed / msPerHour) + ' horas ';
    } else if (elapsed < msPerMonth) {
      const dias = Math.round(elapsed / msPerDay);
      if (dias === 1) {
        return 'Ayer';
      }
      return 'Hace ' + dias + ' dias ';
    } else if (elapsed < msPerYear) {
      return 'Hace ' + Math.round(elapsed / msPerMonth) + ' meses ';
    } else {
      console.log('inside the if condition', elapsed);
      return 'Hace ' + Math.round(elapsed / msPerYear) + ' años ';
    }
  }

}
