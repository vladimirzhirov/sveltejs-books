<script>
    export let current_page;
    export let last_page;
    export let per_page;
    export let from1;
    export let to;
    export let total;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function range(size, startAt = 0) {
        return [...Array(size).keys()].map(i => i + startAt);
    }

    function changePage(page) {
        if (page !== current_page) {
            dispatch('change', page);
        }
    }
</script>

<nav class="nav">
    <ul class="pagination">
        {#each range(last_page, 1) as p}
            <li class="page-item {p === current_page ? 'active': ''}">
                <a class="page-link" href="javascript:void(0)" on:click="{() => changePage(p)}">{p}</a>
            </li>
        {/each}
    </ul>
</nav>