# redux-thunk

Library ini memungkinkan bagi kita untuk membuat sebuah _action creator_ redux yang memberikan (_return_) sebuah fungsi, bukan sebuah _action_ seperti biasanya.
Hal ini berguna misalnya kita ingin membuat men-_dispatch_ sebuah action yang perlu proses delay, atau action untuk mengambil konten dari backend, atau action yang memerlukan sebuah pemrosesan di dalamnya.

Dengan redux-thunk, fungsi di dalam action creator dapat melakukan dispacth dan membaca state redux. 

Perhatikan contoh-contoh di dalam berkas latihan untuk melihat berbagai contoh _action creator_ yang dimungkinkan oleh redux-thunk, dan bandingkan dengan _action creator_ dari contoh penggunaan redux sebelumnya.
