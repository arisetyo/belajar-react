# Unit Testing

> Only programmers who never create bugs don't need to do testing. - OH

Berikut ini adalah paket-paket _library_ yang dibutuhkan untuk melakukan Unit Testing pada komponen/aplikasi React. Beberapa kita gunakan dalam latihan ini.

## Paket Utama
* Mocha

	_Test runner framework_

* Chai
	
	API asersi (contoh: berisi perintah-perintah _expect_ seperti _equal_, _deepEqual_, dan perintah-perintah _assert_.

* Enzyme
	
	Library untuk melakukan test pada komponen React. Ia dapat me-render dan melakukan asersi pada komponen di dalam lingkungan Mocha. Dibuat oleh Airbnb.

## Paket Test Environment

* jsdom

	Mensimulasi sebuah browser DOM dalam JavaScript

* react-addons-test-utils

	_Addon_ yang memungkinkan tes pada aplikasi React

* babel-register

	Diperlukan untuk men-setup _fake DOM_

## Paket Berguna Lainnya

* sinon

	Membuat dan menginspeksi _spies_

* cheerio
	
	jQuery core untuk lingkungan server JavaScript
