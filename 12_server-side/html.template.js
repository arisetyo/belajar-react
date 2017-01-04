export default ({body, title, initialState}) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<script>window.__APP_INITIAL_STATE__220877 = ${initialState}</script>
			<title>${title}</title>
		</head>
		<body>
			<div id="root">${body}</div>
			<script src="build/bundle.js"></script>
		</body>
		</html>
	`;
};

//`body` dibutuhkan untuk render awal oleh server. Selanjutnya aplikasi akan dijalankan dari skrip React di dalam bundle.js hasil transpilasi Webpack.