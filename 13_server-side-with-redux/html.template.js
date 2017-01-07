export default ({body, initialState}) => {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<title>SERVER SIDE WITH REDUX</title>
			<script>
				window.__REDUX_STATE__212 = ${JSON.stringify(initialState)}
			</script>
		</head>
		<body>
			<div id="root">${body}</div>
			<script src="build/bundle.js"></script>
		</body>
		</html>
	`;
};