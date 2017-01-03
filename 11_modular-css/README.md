# Keterangan

## index.css

Ini adalah contoh penggunaan standar sebuah berkas CSS.
Di latihan ini, `index.css` langsung dimuat oleh `index.html` dan cuma digunakan untuk mendeklarasikan _style_ `body`.

## App.css

Berkas ini dimuat sebagai modul oleh komponen _App_.
Perhatikan _class_ `container` yang digunakan oleh komponen lain tetapi tetap memiliki _style_ masing-masing.
Ini karena webpack membuat nama kelas ini menjadi unik setelah proses transpilasi (Lihat _source_).

Apabila kita tidak ingin nama kelas menjadi unik yang hanya dapat digunakan oleh sebuah komponen kita dapat menambahkan sintaks `:global()`. Lihat contoh pada _class_ `redFont`. _Class_ ini juga digunakan oleh komponen lain. Serta perhatikan cara penulisan sebuah _class_ global di JSX.

Kita juga dapat menggunakan kondisional untuk menentukan apakah sebuah _style_ ditambahkan ke sebuah komponen. Perhatikan penggunaan _class_ `.wrapper.hidden` yang tergantung pada _state_ komponen.

_Media query_ berfungsi seperti biasa seperti yang dapat dilihat pada deklarasi _style_ `button`.

## ComponentSample.css

Kita tetap dapat menggunakan _selector_ CSS (contoh `:hover`) seperti biasa.

## SimpleImageContainer.css

Di komponen ini kita memasukkan data url sebuah gambar sebagai latar belakang _layer_. Kita dapat menggunakan _property_ `style` pada JSX untuk memasukkan nilai CSS yang dinamis.