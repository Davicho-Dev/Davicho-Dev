import { Button2 } from '@atoms'

export const Button = ({ label }: { label: string }): JSX.Element => (
	<button title={label} aria-label={label}>
		{label}
		<Button2 label={label} />
	</button>
)
