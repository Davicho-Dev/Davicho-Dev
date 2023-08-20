export const Button = ({ label }: { label: string }): JSX.Element => (
	<button title={label} aria-label={label}>
		{label}
	</button>
)
