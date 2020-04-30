<script>
    import FormField from '../components/FormField.svelte';
    import FileUpload from '../components/FileUpload.svelte';
    import page from 'page';
    import axios from "axios";

    export let params = {};
    let bookId = params.uid;

    let form;
    let files = [];
    let btnText = bookId ? "Редактировать" : "Создать";

    export const addBook = values => {
        return axios.post("http://localhost:4000/books/add", values);
    };

    export const updateBook = (id, values) => {
        return axios.post(`http://localhost:4000/books/update/${id}`, values);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = new FormData(form);

        data.append("filename", data.get("image").name);

        bookId
                ? updateBook(bookId, data).then(() => {
                 //   page("/books");
                })
                : addBook(data)
                        .then(() => {
                            page("/books");
                        })
                        .catch(error => {
                            if (error) {
                                console.error("error");
                            }
                        });
    };

    const handleSelectedFile = (e) => {
        const data = new FormData();
        data.append("file", e.detail.image[0]);
        data.append("filename", e.detail.image[0].name);

        axios.post("http://localhost:4000/upload", data)
                .then(function (response) {
                })
                .catch(function (error) {
                });
    };

    const fetchBook = (async () => {
        if (!bookId) {
            return Promise.resolve({});
        }
        const response = await axios.get(`http://localhost:4000/books/get/${params.uid}`);
        return response.data;
    })();

</script>


<div>
    {#await fetchBook}
        <p>...waiting</p>
    {:then data}
        <h3>{data.name ? data.name: "Новая книга"}</h3>
        <form bind:this={form} on:submit={handleSubmit}>
            <div class="row">
                <div class="col mt-3">
                    <div class="text-center">
                        <h4 class="title">Upload An Image</h4>
                        <hr/>
                        <FileUpload on:selectedFile={handleSelectedFile} src={data.image ? data.image.url: ''}/>
                    </div>
                </div>
                <div class="col mt-3">
                    <h4 class="title">Base attributes</h4>
                    <hr/>
                    <FormField
                            fieldType="text"
                            fieldClasses="form-control"
                            name="isbn"
                            label="ISBN"
                            labelClasses="control-label"
                            value={data.isbn}
                    />
                    <FormField
                            fieldType="text"
                            fieldClasses="form-control"
                            name="name"
                            label="Name"
                            labelClasses="control-label"
                            className="form-control"
                            value={data.name}
                    />
                    <FormField
                            fieldType="textarea"
                            fieldClasses="form-control"
                            name="description"
                            label="Description"
                            labelClasses="control-label"
                            value={data.description}
                    />
                </div>
            </div>
            <div class="form-group mt-3">
                <button
                        class="btn btn-primary"
                        type="submit"
                        disabled="" on:click={handleSubmit}>
                    {btnText}
                </button>
            </div>
        </form>
    {/await}
</div>

