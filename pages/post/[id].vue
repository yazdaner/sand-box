<template>
    <div>
        <h1>{{ route.params.id }}</h1>
        <h1>{{ route.query.name }}</h1>
    </div>
</template>
<script setup>
const route = useRoute();

</script>