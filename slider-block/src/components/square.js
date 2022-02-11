export const Square = (props) => {
	const { color, children } = props;
	const square = {
        width: '100px',
        height: '100px',
		border: '1px solid black',
		backgroundColor: color,
    }
	return (
		<div style={square}>
			{ children }
		</div>
	);
}
