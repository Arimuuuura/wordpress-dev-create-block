import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Square } from './components/Square';

export const save = ({ attributes }) => {
	const { content, color } = attributes;
	console.log(`content: ${content}`)
	// console.log(`color: ${color}`)

	return (
		<div {...useBlockProps.save()}>
			<Square color={color} />
		</div>
	);
}
