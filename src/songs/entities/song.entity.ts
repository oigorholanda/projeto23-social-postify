import { randomUUID } from "crypto";

export class Song {
    private _title: string;
    private _artist: string;
    private readonly id: string;

    constructor (artistParam: string, titleParam: string) {
        this.title = titleParam;
        this.artist = artistParam;
        this.id = randomUUID();
    }

    getInfo() {
        return `Artist: ${this.artist} | Title: ${this.title} - 
        ${this.id}`
    }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    public get artist(): string {
        return this._artist;
    }
    public set artist(value: string) {
        this._artist = value;
    }
}