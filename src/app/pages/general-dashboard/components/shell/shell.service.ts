import { Injectable } from '@angular/core';
import { hearderInfos } from './header/header.component';

@Injectable()
export class shellService {

    private _actualInfos: hearderInfos;

    constructor() {
    }

    getInfos(): hearderInfos {
        return this._actualInfos;
    }

    setInfos(infos: hearderInfos) {
        this._actualInfos = infos;
    }
}