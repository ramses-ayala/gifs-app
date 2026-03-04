import { Component, input } from "@angular/core";
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import { IGif } from "../../interfaces/gif.interfaces";

@Component ({
    selector: 'gif-list-component',
    imports: [GifListItemComponent],
    templateUrl: './gif-list.component.html'
})

export class GiftListComponent {
    arrayGifs = input.required<IGif[]>();
}