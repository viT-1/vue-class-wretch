module.exports = {
	files: ['dist/*.js', 'dist/*.esm.js'],
	from: [
		'process.env.NODE_ENV',
		'/// <reference types=\'reflect-metadata\'/>',
		'\'vue-class-component\'',
		'\'vue-property-decorator\'',
		'\'vue\'',
		'\'wretch\''
	],
	to: [
		'JSON.stringify("production")',
		'',
		'\'./vue-class-component.esm.js\'',
		'\'./vue-property-decorator.js\'',
		'\'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js\'',
		'\'https://cdn.jsdelivr.net/npm/wretch@1.6.0/dist/bundle/wretch.esm.js\''
	],
};
