import App from "./App.svelte";

const app = new App({
	target: document.body,
	props: {
		siteName: "Svelte Example"
	}
});

export default app;