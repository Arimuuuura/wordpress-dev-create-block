<?php

namespace api;

class Api {
	protected String $url;
	public $ch;
	public String $response;

	function __construct($url) {
		$this->url = $url;
		// cURLセッションを初期化
		$this->ch = curl_init();
		// URLの情報を取得
		$this->setOption();
		$this->response = curl_exec($this->ch);
		$this->getResult();
		// セッションを終了
		curl_close($this->ch);
	}

	function setOption(): void {
		// オプションを設定
		curl_setopt($this->ch, CURLOPT_URL, $this->url); // 取得するURLを指定
		curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true); // 実行結果を文字列で返す
		curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, false); // サーバー証明書の検証を行わない
	}


	function getResult(): Array {
		$result = json_decode($this->response, true);
		return $result;
	}
}
