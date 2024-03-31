<template>
    <div>
        <h1>error page</h1>
        <h3>{{ statusCode }}</h3>
        <h5>{{ statusMessage }}</h5>
        <button @click="handleError">home page</button>
    </div>
</template>
<script setup>

    const error = useError();
    const statusCode = error.value.statusCode;
    const statusMessage = error.value.statusMessage;

    function handleError(){
        clearError({redirect : '/'})
    }
</script>