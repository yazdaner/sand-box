<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }} - {{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
<script setup>
const posts = ref([]);
try {
    const data = await $fetch("posts", {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        query: { _limit : 5 }
    });
    posts.value = data;
} catch (error) {
    console.log(error);
}
</script>