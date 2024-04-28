<template>
    <div>
        {{ data }}
    </div>
</template>
<script setup>
const data = await $fetch("http://localhost:3000/api/test?checked=true", {
    method: 'POST',
    body: {x: 'good'}
})
console.log(data);
</script>