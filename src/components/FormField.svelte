<script>
    export let fieldType;
    export let name;
    export let placeholder;
    export let label;
    export let labelClasses;
    export let fieldClasses;
    export let value;
</script>

{#if fieldType === 'text' || fieldType === 'textarea'}
    <div class="form-group">
        <label class={labelClasses} for="">{label}</label>
        <div>
            {#if fieldType === 'text'}
                <input
                        placeholder={placeholder}
                        type="text"
                        name={name}
                        class={fieldClasses}
                        bind:value={value}
                />
            {/if}
            {#if fieldType === 'textarea'}
                <textarea name={name} class={fieldClasses} rows="10" cols="40" value={value}/>
            {/if}
        </div>
    </div>

{/if}
