import React from 'react'

const Paragraphs = () => (
	<div>
		<p>
			Kita menjalankan sebuah server Node langsung menggunakan babel-cli. Sehingga kita dapat menggunakan JSX langsung di server-side JS.
			Untuk produksi lebih baik mentraspilasi server.js dan menjalankannya seperti server Node lainnya.
		</p>
		<p>
			Kerja server berhenti saat render pertama dikirim. Selanjutnya tugas dilakukan seperti biasa oleh bundle.js yang dibuat oleh Webpack.
			Metode seperti onClick tidak akan bekerja bila kita hanya mengandalkan server-side. 
		</p>
	</div>
)

export default Paragraphs