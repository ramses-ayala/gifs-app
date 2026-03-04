import { Component, effect, inject } from "@angular/core";
import { GiftListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from "../../services/gifs.service";

@Component({
    selector: 'trending-page-component',
    imports: [GiftListComponent],
    templateUrl: './trending-page.component.html'
})

export default class TrendingPageComponent {
    myGifService = inject(GifService);
    
    constructor () {
        console.log('mygifs: ', this.myGifService.trendingGifs());
    }
}