import { IGif } from "../interfaces/gif.interfaces";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static giphyItemToGif (giphyItem: GiphyItem): IGif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        }
    }

    static giphyItemsToGifs (giphyItems: GiphyItem[]): IGif[] {
        return giphyItems.map(item => this.giphyItemToGif(item));
    }
}