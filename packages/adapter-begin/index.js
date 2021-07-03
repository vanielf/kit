export default function () {
	/** @type {import('@sveltejs/kit').Adapter} */
	const adapter = {
		name: '@sveltejs/adapter-begin',

		async adapt({ utils }) {
			console.log('@sveltejs/adapter-begin is no longer supported.');
		}
	};

	return adapter;
}
