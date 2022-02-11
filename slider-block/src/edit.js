import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useBlockProps, InspectorControls, RichText } from '@wordpress/block-editor';
import './editor.scss';
import { Square } from './components/square';

export const Edit = ({ attributes, setAttributes }) => {
	const { content, color } = attributes;
	console.log(useBlockProps());
	return (
		<>
			<InspectorControls>
                <PanelBody title="color">
                    <SelectControl
						value={color}
						onChange={(value) => setAttributes({ color: value })}
                        options={[
                            {
                                label: __('Success'),
                                value: 'green',
                            },
                            {
								label: __('Info'),
							  	value: 'blue'
							},
                            {
                                label: __('Warning'),
                                value: 'orange',
                            },
                            {
                                label: __('Danger'),
                                value: 'red',
                            },
                        ]}
                    />
                </PanelBody>
            </InspectorControls>
			<div { ...useBlockProps() }>
				<Square color={color}>{content}</Square>
				<RichText
                    tagName="p"
                    onChange={(value) => setAttributes({ content: value })}
                    value={content}
                />
			</div>
		</>
	);
}
