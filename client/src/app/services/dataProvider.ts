import { Injectable } from '@angular/core';

@Injectable()

// Use this class to store data cross component
export class DataStorage {
    public data: any;
    public constructor() { }
}