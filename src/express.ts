import express from 'express';
import path from 'path';

const port = 3000;
const app = express();

app.use(express.static(
	path.resolve('dist'),
	{
		cacheControl: false,
		extensions: ['js'],
	},
));

app.get('/', (req, res): void => {
	res.sendFile(
		path.resolve('dist', 'index.html'),
	);
});

// TODO: resolve to .js extensions instead of replacing imports in js-files

const server = app.listen(port, (): void => {
	console.log(`Example app listening on port ${port}!`);
});

// @link: https://flaviocopes.com/node-terminate-program/
process.on('SIGTERM', (): void => {
	server.close((): void => {
		console.log('Process terminated');
	});
});