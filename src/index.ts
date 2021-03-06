import 'babel-polyfill';
import 'reset-css';
import './style';

const loading = document.createElement('p');
loading.innerText = 'Loading...';
document.body.appendChild(loading);

requestAnimationFrame(async () => {
	try {
		await import('./app');
		loading.remove();
	} catch (err) {
		document.body.innerHTML = '<p>Something went wrong. Sorry :(</p>';
		// eslint-disable-next-line no-console
		console.error(err);
	}
});
