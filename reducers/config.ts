import { createReducer, PayloadAction } from 'redux-starter-kit'

import { setAvatarUrlTemplate } from '../actions/config'
import { InitialState } from '../initialState'

export interface ConfigState {
	readonly avatarUrlTemplate?: string
}

export const ConfigReducer = createReducer<ConfigState>(InitialState.config, {
	[`${ setAvatarUrlTemplate }`]: (state, action: PayloadAction<string>) => ({ ...state, avatarUrlTemplate: action.payload }),
})
