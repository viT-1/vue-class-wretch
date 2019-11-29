module.exports = {
	files: ['dist/*.js', 'dist/*.esm.js'],
	from: [
		/\'vue-class-component\'/g,
		/\'vue\'/g,
		/process\.env\.NODE_ENV/g,
		/\'wretch\'/g
	],
	to: [
		'\'./vue-class-component.esm.js\'',
		'\'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js\'',
		'JSON.stringify("production")',
		'\'https://cdn.jsdelivr.net/npm/wretch@1.6.0/dist/bundle/wretch.esm.js\''
	],
};
