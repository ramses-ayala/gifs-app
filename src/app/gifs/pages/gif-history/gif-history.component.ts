import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GifService } from "../../services/gifs.service";
import { IGif } from "../../interfaces/gif.interfaces";
import { GiftListComponent } from "../../components/gif-list/gif-list.component";

@Component({
    selector: 'gif-history',
    templateUrl: './gif-history.component.html',
    imports: [GiftListComponent]
})

export default class GifHistoryComponent {
    myQuery = signal('');
    myGifService = inject(GifService);
    myItems = signal<IGif[]>([]);

    route = inject(ActivatedRoute).params.subscribe(params => {
        this.myItems.set(this.myGifService.searchOnHistory(params['query']));
    });
}