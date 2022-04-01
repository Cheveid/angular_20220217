import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'appPrice',
})
export class PricePipe implements PipeTransform {
	transform(
		value: number,
		currency: string = 'RUB',
		locale: string = 'ru-RU',
		fractionDigits: number = 0,
	): string {
		const format = Intl.NumberFormat(locale, {
			style: 'currency',
			currency: currency,
			currencyDisplay: 'symbol',
			minimumFractionDigits: fractionDigits,
		});
		return format.format(value);
	}
}
