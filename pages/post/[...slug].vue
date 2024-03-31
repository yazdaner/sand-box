<template>
    <div>
        <h1>{{ route.params.slug[0] }}</h1>
    </div>
</template>
<script setup>
const route = useRoute();

</script>