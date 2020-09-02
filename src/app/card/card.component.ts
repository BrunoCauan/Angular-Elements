import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardComponent implements OnInit {
    @Input() title: string;
    @Input() description: string;
    @Input() author: string;

    constructor() {}

    ngOnInit(): void {}
}
