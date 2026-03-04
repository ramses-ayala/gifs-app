import { Component, inject, signal } from "@angular/core";
import { GiftListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from "../../services/gifs.service";
import { IGif } from "../../interfaces/gif.interfaces";

@Component ({
    selector: 'search-page-component',
    templateUrl: './search-page.component.html',
    imports: [GiftListComponent]
})

export default class SearchPageComponent {
    myGifService = inject(GifService);
    searchGifs = signal<IGif[]>([]);

    onSearch (query: string) {
        this.myGifService.searchGifs(query).subscribe(data => {
            this.searchGifs.set(data);
        })
    }
}