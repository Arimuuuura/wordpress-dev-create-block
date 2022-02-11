import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export const save = () => {
	return (
		<p { ...useBlockProps.save() }>
			{ __(
				'Slider Block – hello from the saved content!',
				'slider-block'
			) }
		</p>
	);
}
