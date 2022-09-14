import { Injectable } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';

import { createSelector, State, StateContext, Store } from '@ngxs/store';

interface StateModel {
    isLoading: boolean;
    isSaving: boolean;
    errors: Record<string, unknown> | null;
}

@State<StateModel>({
    name: 'home',
    defaults: {
        isLoading: false,
        isSaving: false,
        errors: null
    }
})
@Injectable()
export class HomeState {

    static isSaving() {
        return createSelector([HomeState], (state: StateModel) => state.isSaving);
    }

    @Receiver()
    static setIsSaving({ patchState }: StateContext<StateModel>, action: EmitterAction<boolean>) {
        patchState({
            isSaving: action.payload,
        });
    }

    static isLoading() {
        return createSelector([HomeState], (state: StateModel) => state.isLoading);
    }

    @Receiver()
    static setIsLoading({ patchState }: StateContext<StateModel>, action: EmitterAction<boolean>) {
        patchState({
            isLoading: action.payload,
        });
    }

    constructor(private store: Store) {}
}