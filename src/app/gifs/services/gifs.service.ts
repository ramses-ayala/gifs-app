import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { environment } from "../../../environments/environment";
import type { GiphyResponse } from "../interfaces/giphy.interfaces";
import { GifMapper } from "../mapper/gif.mapper";
import { IGif } from "../interfaces/gif.interfaces";
import { map, Observable, tap } from "rxjs";


const loadGifsFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem("gifs") ?? '{}';
    const gifs = JSON.parse(gifsFromLocalStorage);
    return gifs;
}

@Injectable({ providedIn: 'root' })
export class GifService {
    private http = inject(HttpClient);
    trendingGifs = signal<IGif[]>([]);
    historyGifs = signal<Record<string, IGif[]>>(loadGifsFromLocalStorage());
    historyKeys = computed(() => Object.keys(this.historyGifs()));

    saveGifsToLocalStorage = effect(() => {
        const history = JSON.stringify(this.historyGifs());
        localStorage.setItem('gifs', history);
    })

    loadData () {
        this.http.get<GiphyResponse>(`${environment.giphyEndPoint}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 25
            }
        }).subscribe(response => {
            this.trendingGifs.set(GifMapper.giphyItemsToGifs(response.data));
        })
    }

    searchGifs (query: string): Observable<IGif[]> {
        return this.http.get<GiphyResponse>(`${environment.giphyEndPoint}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 25,
                q: query
            }
        })
        .pipe(
            map(({ data }) => GifMapper.giphyItemsToGifs(data)),
            tap(item => {
                this.historyGifs.update(history => ({
                    ...history,
                    [query.toLowerCase()]: item
                }));
                // localStorage.setItem(query.toLowerCase(), JSON.stringify(item));            
            })
        )
    }

    searchOnHistory (query: string): IGif[] {
        return this.historyGifs()[query];
        // const gifs = localStorage.getItem(query);
        // return gifs ? JSON.parse(gifs) : [];
    }
}
