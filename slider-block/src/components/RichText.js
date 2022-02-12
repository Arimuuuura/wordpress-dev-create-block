import { RichText as RichTextBase } from '@wordpress/block-editor';

export const RichText = (props) => {
	const { value, onChange } = props;
	return (
		<RichTextBase
			tagName="p"
			onChange={onChange}
			value={value}
		/>
	);
}
