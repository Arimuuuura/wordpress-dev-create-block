<?php
/**
 * Plugin Name:       Api Block
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       api-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_api_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_api_block_block_init' );



function get_api() {
	$url = 'https://jsonplaceholder.typicode.com/users';
//	$this->url = $url;
	// cURLセッションを初期化
	$ch = curl_init();
	// URLの情報を取得
	setOption($ch, $url);
	$response = curl_exec($ch);
	return getResult($response);
	// セッションを終了
//	curl_close($ch);
}

add_action( 'init', 'get_api' );

function setOption($ch, $url): void {
	// オプションを設定
	curl_setopt($ch, CURLOPT_URL, $url); // 取得するURLを指定
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // 実行結果を文字列で返す
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // サーバー証明書の検証を行わない
}

function getResult($response): Array {
	$result = json_decode($response, true);
	return $result;
}
