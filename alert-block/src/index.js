import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import { AlertEdit } from './edit';
import { save } from './save';

 registerBlockType( 'create-block/alert-block', {
    apiVersion: 2,
    edit: AlertEdit,
    save,
});
