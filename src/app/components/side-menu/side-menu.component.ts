import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.less']
})
export class SideMenuComponent implements OnInit {
    public categories: any = [
        {
            _id: "5fafab3aff786e49226649fc",
            name: "Инструменты",
            subCategories: [
                {
                    _id: "elektroinstrumenty-i-texnika-dlya-sada",
                    "name": "Электроинструменты и техника для сада",
                    "category": "5fafab3aff786e49226649fc"
                },
                {
                    _id: "stroitelstvo-izmerenie-i-uborka",
                    name: "Строительство, измерение и уборка",
                    category: "5fafab3aff786e49226649fc"
                },
                {
                    _id: "ruchnoj-instrument-i-osnastka",
                    name: "Ручной инструмент и оснастка",
                    category: "5fafab3aff786e49226649fc"
                }
            ]
        },
        {
            _id: "5fafab3aff786e49226649fb",
            name: "Автотовары",
            subCategories:[
                {
                    _id: "avtoelektronika-i-protivougonnye-sistemy",
                    name: "Автоэлектроника и противоугонные системы",
                    category: "5fafab3aff786e49226649fb"
                },
                {
                    _id: "avtozvuk",
                    name: "Автозвук",
                    category: "5fafab3aff786e49226649fb"
                },
                {
                    _id: "naruzhnye-i-vnutrisalonnye-aksessuary",
                    name: "Наружные и внутрисалонные аксессуары",
                    category: "5fafab3aff786e49226649fb"
                }
            ]
        },
        {
            _id: "5fafab3aff786e49226649fa",
            name: "Офис и сеть",
            subCategories: [
                {
                    _id: "orgtexnika-i-ofisnoe-oborudovanie",
                    name: "Оргтехника и офисное оборудование",
                    category: "5fafab3aff786e49226649fa"
                },
                {
                    _id: "marshrutizatory-i-prochee-besprovodnoe-oborudovanie",
                    name: "Маршрутизаторы и прочее беспроводное оборудование",
                    category: "5fafab3aff786e49226649fa"
                },
                {
                    _id: "professionalnoe-setevoe-oborudovanie",
                    name: "Профессиональное сетевое оборудование",
                    category: "5fafab3aff786e49226649fa"
                }
            ]
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }
}
