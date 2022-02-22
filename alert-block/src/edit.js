import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';
import { InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { useEffect } from "@wordpress/element";


export const AlertEdit = ({ attributes, setAttributes }) => {
    const { style, content } = attributes;

		const data = [
				{
					age: 10,
					gen: "men"
				},
				{
					age: 20,
					gen: "women"
				}
			]

    const blockProps = useBlockProps({
        className: `alert alert-${style}`,
    });

		useEffect(() => {
			setAttributes({test: [...data,
				{
					age: 30,
					gen: "men"
				},
				{
					age: 40,
					gen: "women"
				}
			]});
		},[]);

	// console.table(data)

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Style Settings', 'alert-block')}>
                    <SelectControl
                        value={style}
                        onChange={(value) => setAttributes({ style: value })}
                        options={[
                            {
                                label: __('Success', 'alert-block'),
                                value: 'success',
                            },
                            { label: __('Info', 'alert-block'), value: 'info' },
                            {
                                label: __('Warning', 'alert-block'),
                                value: 'warning',
                            },
                            {
                                label: __('Danger', 'alert-block'),
                                value: 'danger',
                            },
                        ]}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <RichText
                    tagName="p"
                    onChange={(value) => setAttributes({ content: value })}
                    value={content}
                />
            </div>
        </>
    );
}
