module.exports = {
	files: ['dist/*.js'],
	from: /process\.env\.NODE_ENV/g,
	to: 'JSON.stringify("production")',
};
