<template>
    <div>
        <h1>About</h1>
        <h2>count : {{ counter.count }}</h2>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
})
import { useCounter } from '../stores/counter';
    const counter = useCounter();
</script>