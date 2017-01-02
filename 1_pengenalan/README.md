# Membuat komponen React pertama

Di bagian ini kita akan membuat beberapa contoh komponen React sederhana menggunakan JavaScript standar.
Berkas-berkas latihan di bagian ini dapat dicoba langsung di peramban tanpa memerlukan proses transpilasi. Yang kita butuhkan cuma editor kode dan peramban.

## JSX

[JSX](https://facebook.github.io/react/docs/introducing-jsx.html) adalah _shorthand_ (penulisan secara singkat) untuk membuat elemen React.

Lihat contoh berikut:

```
class HelloMessage extends React.Component {
  render() {
    return React.createElement(
      "h1",
      null,
      "Hello World"
    );
  }
}
```

Dan bandingkan elemen yang sama ditulis dengan JSX:

```
class HelloMessage extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
```

Dalam latihan-latihan di repo ini kita hanya akan menggunakan JSX. Jangan takut, awalnya agak sedikit membingungkan.
Tetapi saya jamin menggunakan JSX akan terasa sangat nyaman saat aplikasi kita semakin besar dan kompleks. Dan yang kita butuhkan cuma Babel.

## Babel

[Babel library](https://babeljs.io) memungkinkan bagi kita untuk menggunakan fitur-fitur terbaru JavaScript di peramban.
Seperti kita ketahui peramban-peramban memiliki dukungan yang berbeda-beda terhadap fitur API JavaScript. Dan bisa dipastikan saat ini belum semua fitur JavaScript terbaru (ES6 / ES2015) telah tersedia.
Babel mengubah ES6 menjadi JavaScript standar, memungkinkan bagi kita menggunakan ES6 saat ini. Bila semua peramban telah mendukung ES6 maka kita tidak perlu lagi menggunakan Babel untuk menulis JavaScript versi terbaru di skrip kita.

Selain itu plugin-plugin yang disediakan Babel memungkinkan untuk menggunakan fitur-fitur JavaScript modern seperti React (misalnya penggunaan JSX) di dalam skrip kita.

## Penjelasan Materi Latihan

* "Hello World"
	
  Sebuah aplikasi kecil dengan satu komponen sederhana.

* _counter_
  
  Di sini kita berkenalan dengan _state_ & _lifecycle_ komponen React.

* _timer_
  
  Di sini kita berkenalan dengan interaktivitas pada komponen.

* React _props_
  
  Di aplikasi ini kita mencoba menggunakan beberapa komponen React yang berinteraksi satu sama lain melalui _props_ komponen React.

* Olah data
  
  Di sini kita kembali menggunakan lebih dari satu komponen React, serta menggunakan data tabular untuk me-render sebuah komponen React.

## _Lifecycle_ komponen React

Setiap komponen React memiliki _metode-metode lifecycle_ yang dipanggil tergantung _lifecycle_-nya. Sebagai contoh, metode _render()_ menentukan struktur sebuah komponen di dalam aplikasi. Ini adalah _lifecycle_ yang paling penting karena tanpanya sebuah komponen tidak dirender dan tidak dapat me-_return_ apa-apa.

Contoh lainnya adalah _componentDidMount()_ yang akan dipanggil saat aplikasi selesai di-render. Contoh-contoh lainnya dapat dilihat [di sini](https://facebook.github.io/react/docs/react-component.html).

__Dalam membuat sebuah komponen kita tidak perlu menuliskan setiap metode, hanya yang kita butuhkan saja.__

