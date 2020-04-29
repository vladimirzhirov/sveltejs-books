<script>
    import Pagination from '../components/Pagination.svelte';
    import axios from "axios";
    import TableRow from '../components/TableRow.svelte';

    export let rows;

    let currentPage;
    let totalPages;


    const changePage = params => {
        axios.get(`http://localhost:4000/books/`, {
            params: {page: params.page, bookPerPage: 5}
        }).then(function (response) {
            console.log(response);
            rows = response.data.books;
            currentPage = response.data.page;
            totalPages = response.data.pages;
        });
    };

    changePage({page: 1});
</script>

<div class="my-30">
    <h3>Books</h3>


    <Pagination current_page={currentPage} per_page=5 last_page={totalPages} total={totalPages}
                on:change="{(ev) => changePage({page: ev.detail})}">
    </Pagination>

    <table class="table table-striped  mt-3" width="800px">
        <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>ISBN</th>
            <th>Description</th>
            <th colSpan="2">Actions</th>
        </tr>
        </thead>
        <tbody>
        {#each rows as row}
            <TableRow {row}/>
        {/each}
        </tbody>
    </table>
</div>
