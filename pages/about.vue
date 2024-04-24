<template>
    <div>
        <h1>About</h1>
        <h2>count : {{ count }}</h2>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
})
const count = useState('count');
</script>