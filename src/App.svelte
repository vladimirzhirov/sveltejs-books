<script>
    import router from "page";
    import routes from "./routes.js";

    let page;
    let params;
    let rows = [];
    let loading = true;

    // Iterate through the routes
    routes.forEach(route => {
        router(
                route.path,
                (ctx, next) => {
                    params = ctx.params;
                    next();
                },
                () => {
                    page = route.component;
                }
        );
    });

    // Start the router
    router.start();
</script>

<style src="base.scss" global></style>

<header class="header content">
    <nav class="nav">
        <a class="nav-link" href="/books">Home</a>
        <a class="nav-link" href="/books/create">Create</a>
        <a class="nav-link" href="/about">About</a>
    </nav>
</header>

<main class="content">
    <svelte:component this={page} params={params} rows={rows}/>
</main>
