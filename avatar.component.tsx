import { Person } from '@evestment/evrm-state'
import { InitialsBadge } from '@evestment/evrm-ui'
import React, { FC } from 'react'
import { selectAvatarUrl } from '../../selectors/config.selector'
import { usePropSelector } from '../../utils/hooks'

interface Props {
	person: Person
}

const Avatar: FC<Props> = ({
	person,
}) => {
	const avatarUrl = usePropSelector(selectAvatarUrl, { person })
	const onClick = (avatarUrl) ? () => {
		window.open(avatarUrl, '_blank')
	} : undefined

	return (
		<InitialsBadge
			onClick={ onClick }
		>
			{ person.initials }
		</InitialsBadge>
	)
}

export default Avatar
