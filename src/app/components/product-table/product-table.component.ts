import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-table',
    templateUrl: './product-table.component.html',
    styleUrls: ['./product-table.component.less']
})
export class ProductTableComponent implements OnInit {
    public products: any = [
        {
            name: "Проектор XGIMI H2 серый",
            rating: 5,
            comments: 4,
            price: 1000,
            imgsrc: "https://c.dns-shop.ru/thumb/st4/fit/0/0/26a947071f786d370967f744251a771a/63b96d844bdaac8d0326ffb2e10d5edd100054781199652b3feb610cefca0350.jpg"
        },
        {
            name: "Мышь проводная SteelSeries Rival 600 Dota 2 Edition черный",
            rating: 4,
            comments: 2,
            price: 105,
            imgsrc: "https://c.dns-shop.ru/thumb/st4/fit/wm/802/859/78449062c8d3c626a88269aa1cc5b581/976bc982e29581bbd2a1c96d96e90e711ddbc79465969f00f0bc88816114a9ff.jpg"
        },
        {
            name: "Утюг Bosch TDA302401E зелёный",
            rating: 3,
            comments: 1,
            price: 74,
            imgsrc: "https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/a2dd88ca0fa6afa4619bd2b9397a3cd7/41c99c97d75de34bd763893df435c47411825610a1ecf6b04956eb3d2fa5d9ef.jpg"
        },
    ];


    constructor() { }

    ngOnInit(): void {
    }

}
