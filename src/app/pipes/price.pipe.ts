import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'app_price'
})
export class PricePipe implements PipeTransform {
    private defaultLocale: string = "ru-RU";
    private defaultCurrency: string = "RUB";

    transform(value: number, currency?: string | undefined, locale?: string | undefined, fractionDigits: number = 0): string {
        try {
            let format = Intl.NumberFormat(locale ?? this.defaultLocale, { 
                style: "currency", 
                currency: currency ?? this.defaultCurrency, 
                currencyDisplay: "symbol", 
                minimumFractionDigits: fractionDigits
            });
            return format.format(value);
        }
        catch {
            return "";
        }
    }
}
