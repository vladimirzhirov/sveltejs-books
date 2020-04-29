<script>
    export let row;
</script>

<tr>
    <td>
        <a href="/books/edit/{row._id}" class="btn btn-link">
            <img src={row.image.url} alt="" width="130px" height="150px"/>{" "}
        </a>
    </td>
    <td>{row.name}</td>
    <td>{row.isbn}</td>
    <td>{row.description}</td>
    <td class="align-middle">
        <a class="btn btn-primary" href="/books/edit/{row._id}">
            Edit
        </a>
    </td>
    <td class="align-middle">
        <button class="btn btn-danger " onclick="">
            Delete
        </button>
    </td>
</tr>