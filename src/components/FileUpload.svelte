<script>
    import ImgEncoder from 'svelte-image-encoder';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let src = '';
    let quality = 0.1;
    let imageChosen = false;
    let realTime = true;
    let url;

    function loadFile(e) {
        src = URL.createObjectURL(e.target.files[0]);
        dispatch("selectedFile", {image: e.target.files});
    }


</script>

<p><input on:change={loadFile} type='file' name="image"> </p>

<ImgEncoder {src} {quality} bind:url {realTime} width={400} height={400} crossOrigin='anonymous' classes='profile-image'/>


<style>

    .profile-image { /* Ideally, something like this would go in a global theme definition CSS */
        box-shadow: 2px 2px 8px rgba(0,0,0,.85);
        margin: 1em;
    }
    p {
        word-break: break-word;
    }
    img {
        margin: 1em;
    }
</style>


