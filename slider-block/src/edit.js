import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export const Edit = () => {
	return (
		<p { ...useBlockProps() }>
			{ __( 'Slider Block – hello from the editor!', 'slider-block' ) }
		</p>
	);
}
