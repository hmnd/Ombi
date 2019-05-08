﻿import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SharedModule } from "../shared/shared.module";
import { PipeModule } from "../pipes/pipe.module";

import * as fromComponents from './components';


@NgModule({
    imports: [
        RouterModule.forChild(fromComponents.routes),
        SharedModule,
        PipeModule,
        InfiniteScrollModule,
    ],
    declarations: [
        ...fromComponents.components
    ],
    entryComponents: [
        ...fromComponents.entryComponents
    ],
    exports: [
        RouterModule,
    ],
    providers: [
        ...fromComponents.providers
    ],

})
export class DiscoverModule { }
