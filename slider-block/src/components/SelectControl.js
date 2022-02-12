import { SelectControl as Select } from '@wordpress/components';

export const SelectControl = (props) => {
	const { options, color, onChange } = props;

	return (
		<Select
			label="Color"
			value={ color }
			options={options}
			onChange={onChange}
		/>
	);
};
