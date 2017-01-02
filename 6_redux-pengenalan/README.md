# Redux

Saat aplikasi kita mulai kompleks menggunakan banyak komponen, kita tidak dapat lagi bergantung pada _props_ sebagai sarana komunikasi antar komponen.
Kita membutuhkan sesuatu yang dapat menyimpan _state_ seluruh aplikasi dan mengirim perintah pada komponen yang sesuai saat terjadi perubahan pada _state_.
Di sinilah kegunaan [Redux](http://redux.js.org).

Redux dapat dianggap sebagai sebuah pusat penyimpanan informasi status sebuah aplikasi. Apapun yang terjadi di aplikasi kita dapat menyimpannya menggunakan Redux.
Apakah aplikasi digunakan user terautentikasi, apakah informasi yang dimasukkan ke sebuah input sudah benar, view mana yang harus ditampilkan saat user mengklik sebuah menu, dan sebagainya.
[Artikel berikut](https://css-tricks.com/learning-react-redux/) menjelaskan kegunaan Redux secara cukup jelas.

# Perhatian

Di bagian ini tersedia 3 berkas aplikasi utama:

* _index-1-basic.js_ Penggunaan Redux sederhana, menggunakan sebuah integer sebagai store
* _index-2-object.js_ Contoh penggunaan object sebagai store 
* _index-3-best-practice.js_ Memisahkan _action creator_ di berkas terpisah

Namakan ulang salah-satu berkas menjadi _index.js_ lalu jalankan npm start untuk mencoba.
