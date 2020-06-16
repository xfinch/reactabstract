import {
	getAvatarUrlTemplate,
	Person,
} from '@evestment/evrm-state'
import { createSelector } from 'reselect'
import { hydrateTemplateUrl } from '../utils/url'

export const selectAvatarUrl = createSelector(
	getAvatarUrlTemplate,
	(state, props: { person: Person }) => props,
	(avatarUrlTemplate, { person }) => {
		if (!avatarUrlTemplate) {
			return ''
		}

		return hydrateTemplateUrl({
			obj: person,
			template: avatarUrlTemplate,
		})
	}
)
