import { Component, Input } from '@angular/core';

type Color = 'yellow' | 'pink' | 'orange' | 'green' | 'blue';

interface Stat {
    name: string;
    value: string;
}

@Component({
    selector: 'game-card',
    templateUrl: './game-card.component.html',
    styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
    @Input() level: number;
    @Input() name: string;
    @Input() description: string;
    @Input() bgImage: string;
    @Input() image: string;

    @Input() statOneName: string;
    @Input() statOneValue: string;

    @Input() statTwoName: string;
    @Input() statTwoValue: string;

    @Input() statThreeName: string;
    @Input() statThreeValue: string;

    private _color: Color;
    
    get color(): Color { return this._color; }
    
    @Input() set color(value: Color) { this._color = value || 'blue'; }

    private _stats: string;
    public cardStats: Stat[];
    
    get stats(): string { return this._stats; }
    
    @Input() set stats(value: string) {
        this._stats = value;
        this.cardStats = JSON.parse(this.stats)?.value;
    }
}
