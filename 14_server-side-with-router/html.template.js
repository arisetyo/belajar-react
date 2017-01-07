export default ({body}) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<title>Server-side with react-router</title>
		</head>
		<body>
			<div id="root">${body}</div>
			<script src="build/bundle.js"></script>
		</body>
		</html>
	`;
};