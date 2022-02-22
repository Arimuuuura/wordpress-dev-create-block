import { RichText, useBlockProps } from '@wordpress/block-editor';

export const save = ({ attributes }) => {
    const { style, content, test } = attributes;
	console.table(attributes)
	console.log(test)

    return (
        <div {...useBlockProps.save({ className: `alert alert-${style}` })}>
            <RichText.Content tagName={'p'} value={content} />
        </div>
    );
}
