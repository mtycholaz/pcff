import { Injectable } from '@angular/core';
import { EmitterAction, Receiver } from '@ngxs-labs/emitter';

import { createSelector, State, StateContext, Store } from '@ngxs/store';

interface StateModel {
    message: string;

    isLoading: boolean;
    isSaving: boolean;
    errors: Record<string, unknown> | null;
}

@State<StateModel>({
    name: 'home',
    defaults: {
        message: 'Hello World!',

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

    static getMessage() {
        return createSelector([HomeState], (state: StateModel) => state.message);
    }

    @Receiver()
    static setMessage({ patchState }: StateContext<StateModel>, action: EmitterAction<string>) {
        patchState({
            message: action.payload,
        });
    }

    constructor(private store: Store) {}
}