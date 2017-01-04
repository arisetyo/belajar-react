# Server-Side React

Membuat aplikasi React dengan dukungan server-side bukanlah sebuah keharusan. Tetapi ada beberapa keuntungan yang didapat bila kita menggunakan metode ini:
* _load_ yang lebih cepat saat aplikasi pertama kali di-_request_
* penggunaan browserHistory bila menggunakan react-router

Tidak ada yang berbeda dalam pembuatan aplikasi React dengan dukungan server-side app. Kita cuma menambahkan sebuah server yang me-render aplikasi pertama kali.
Sesudah itu aplikasi di client akan mengambil alih dan berfungsi seperti biasa.

Di latihan ini kita akan membuat sebuah web server menggunakan Express dan Babel. Ada baiknya untuk mengenal terlebih dahulu pembuatan web server menggunakan Express dan Node.