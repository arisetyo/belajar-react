# Materi Bimbingan Penggunaan React

## Pengenalan React

React adalah sebuah library JavaScript yang dikembangkan dan dikelola oleh Facebook & Instagram untuk menampilkan data & membuat komponen-komponen User Interface.
Menurut layanan analitik Libscore, saat ini React digunakan oleh Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, dan lain-lain (Wikipedia).


**Konsep _“Atomic Design Methodology”_**

> We're not designing pages, we're designing systems of components. —Stephen Hay

Dalam konsep ADM, komponen dapat diumpakan sebagai atom. Kita menggabunkan atom-atom menjadi molekul, molekul menjadi organisme, organisme menjadi template, template menjadi halaman-halaman.
React sangat cocok diaplikasikan ke dalam konsep pengembangan ADM karena dalam React kita memulai dari mengembangkan komponen-komponen yang kita gabungkan untuk membentuk sebuah halaman.

Keterangan lebih lanjut mengenai ADM dapat dibaca di [tautan ini](http://bradfrost.com/blog/post/atomic-web-design/).

## Pengenalan NPM

_Package manager_ adalah software yang digunakan untuk menginstalasi dan mengelola paket-paket software. Hampir setiap bahasa pemrograman dan sistem operasi memiliki _package manager_-nya masing-masing. Beberapa contoh package manager yang terkenal misalnya brew, apt-get, composer, dan bower.

NPM (Node Package Manager) adalah sebuah package manager yang dibuat menggunakan teknologi [Node](https://nodejs.org/en/). Untuk menggunakannya kita harus menginstal Node terlebih dahulu di sistem.

__Catatan__: Selain untuk NPM, kita juga akan membutuhkan Node untuk membuat sebuah aplikasi _backend_ berbasis Node di latihan React _server-side_

* Instalasi Node
	
	Silahkan langsung membuka laman Node untuk membaca cara instalasi Node di sistem operasi yang digunakan. Saya sendiri menggunakan brew untuk menginstal Node di MacOS.

* package.json
	
	Berkas _package.json_ adalah berkas konfigurasi yang digunakan oleh Node. Dalam latihan ini saya akan banyak menggunakan berkas ini terutama untuk konfigurasi berkas-berkas yang harus diinstalasi menggunakan NPM.
	
	Cara penggunaannya mudah, kita tinggal membuka direktori yang berisi berkasi _package.json_ melalui terminal lalu memulai instalasi library yang dibutuhkan dengan perintah `npm isntall`.

* Skrip NPM
	Selain mencatat library yang digunakan, _package.json_ juga dapat digunakan untuk menuliskan skrip perintah yang dapat kita jalankan di sebuah lingkungan Node.
	
	Di banyak latihan, selain perintah `npm install` untuk menginstalasi library, kita juga akan menggunakan skrip `npm start` untuk menjalankan perintah-perintah seperti transpilasi menggunakan webpack atau menjalankan server Node.
	
	Di bagian TDD, kita juga dapat mengatur skrip `npm test` untuk menjalankan _test runner_ seperti Mocha untuk menjalankan tes pada berkas-berkas JavaScript aplikasi kita.

## Pengenalan ES6

[Pengenalan ES6.](https://github.com/arisetyo/belajar-react/tree/master/3_es6)

## Penggunaan Babel dan Webpack

* Instalasi webpack global
* Mengenal Babel & Webpack
* Mengenal webpack.config.js
* hot module reload & webpack-dev-server
* Membuat komponen React menggunakan ES6
* Menerjemahkan komponen dari latihan sebelumnya ke ES6

## Pengenalan React-Router
* Instalasi
* _Single Page Application_
* Contoh: pembuatan SPA sederhana


## Pengenalan Redux
* Apa itu Redux
* _Application state_
* Membuat komponen React + Redux sederhana
	* _Counter_
	* _To-do List_ sederhana
* Membuat komponen React + Redux lanjutan
	* _To-do List_ lanjutan
	* _Wrapper_ Raphael dengan Redux

## Styling
* Penggunaan CSS inline
* Penggunaan CSS global
* Penggunaan CSS modular
	* Keuntungannya
	* Contoh: memberi _modular style_ untuk komponen-komponen React
* Animasi untuk React
* Animasi CSS
	* Animasi sederhana
	* Animasi lanjutan
	* Animasi komponen SVG (Raphael)

## React lanjutan
* Class vs fungsi
* React _server side_
	* Tujuan
	* Contoh aplikasi
* Optimasi menggunakan Webpack
* ESLint
* Penggunaan middleware
	* Redux-Thunk
	* React-Redux-Router
* Membuat aplikasi _streaming_ musik menggunakan React dan Redux
	* Komponen
	* _Router_
	* _State_ aplikasi
	* Panggilan API
	* _Styling_