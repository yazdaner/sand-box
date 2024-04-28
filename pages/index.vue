<template>
    <div>
        {{ data.data.id }}
    </div>
</template>
<script setup>
    const data  = await $fetch("http://localhost:3000/api/posts/2123/asdasd/sadwqr23/32423")
    console.log(data);
</script>