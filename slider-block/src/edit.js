import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { Square } from './components/Square';
import {SelectControl} from "./components/SelectControl";
import {useState} from "@wordpress/element";

export const Edit = ({ attributes, setAttributes }) => {
	const { content, color } = attributes;
	const [ selectColor, setSelectColor ] = useState('');

	const OPTIONS = [
		{ label: 'Red', value: 'red' },
		{ label: 'Blue', value: 'blue' },
		{ label: 'Green', value: 'green' },
		{ label: 'Yellow', value: 'yellow' },
		{ label: 'Orange', value: 'orange' },
	];

	return (
		<>
			<InspectorControls>
				<PanelBody title="color">
					<SelectControl
						value={color}
						onChange={(value) => setAttributes({ color: value })}
						options={[
							{ label: __('Success'), value: 'green' },
							{ label: __('Info'), value: 'blue' },
							{ label: __('Warning'), value: 'orange' },
							{ label: __('Danger'), value: 'red' },
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<Square color={selectColor} />
				<SelectControl
					options={
						OPTIONS.map(
							({label, value}, index) => ({ label: label, value: value })
						)
					}
					color={selectColor}
					onChange={(value) => setSelectColor(value)}
				/>
			</div>
		</>
	);
}
