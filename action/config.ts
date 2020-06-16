
import { createAction } from 'redux-starter-kit'

const NAMESPACE = 'config'

export const setAvatarUrlTemplate = createAction<string>(`${ NAMESPACE }/setAvatarUrlTemplate`)
