#Optimasi

Dua library berikut berhubungan dengan peningkatan keoptimalan aplikasi yang kita buat. Selain itu dua library ini juga mendorong penulisan komponen-komponen sederhana sehingga mengurangi praktek pembuatan komponen kompleks yang susah dimengerti/dikelola.

##Recompose

Dengan menggunakan Recompose kita dapat menggunakan fitur-fitur komponen Class (state, update pada property tertentu, default value, etc.) pada komponen Fungsional. Dengan begitu kita dapat mengoptimasi komponen-komponen yang digunakan di aplikasi.

##Reselect

Reselect memungkinkan kita mengolah data yang disimpan di Redux, sehingga memungkinkan struktur state aplikasi sesederhana mungkin. Selain mengurangi kompleksitas state yang disimpan oleh Redux, kita juga meminimalisasi pengolahan data di komponen React. Sebuah selector tidak akan diolah kecuali ada argumennya yang berubah.

##Contoh Penggunaan

Dalam contoh berikut kita akan membuat sebuah aplikasi _to-do list_. Kita akan menggunakan Redux untuk menyimpan state aplikasi, dalam hal ini tasks. Seperti biasa kita akan menggunakan reducer dan actions.

Kita akan menggunakan Reselect untuk mengolah data di state dan mengirimkan data yang sesuai ke komponen, sehingga komponen tidak perlu mengolah data state Redux.

Di komponen utama (App) kita akan menggunakan Recompose untuk mengolah state dan default value komponen.

##Catatan

Di contoh ini, selain library Recompose & Reselect kita akan menggunakan plugin object rest/spread. Plugin ini memungkinan operasi rest & spread pada object, sehingga kita tidak perlu menggunakan Object.assign pada reducer. Kita juga menggunakan webpack dev server untuk memudahkan proses pengembangan.