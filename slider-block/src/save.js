import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Square } from './components/square';

export const save = ({ attributes }) => {
	const { content, color } = attributes;

	return (
		<div {...useBlockProps.save({ className: color })}>
            <Square color={color}>{content}</Square>
        </div>
	);
}
