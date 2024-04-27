<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }} - {{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
    <button @click="next">next</button>
    <button @click="previous">previous</button>
    <div v-if="pending">loading ...</div>
</template>
<script setup>

const start = ref(0);

// const { data : posts, pending, error, refresh } = useLazyAsyncData('posts', () => $fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start.value}&_limit=5`));
const { data : posts, pending, error, refresh } =  useLazyFetch(() => `https://jsonplaceholder.typicode.com/posts?_start=${start.value}&_limit=5`);

function next(){
    start.value += 5;
    refresh();
}

function previous(){
    start.value -= 5;
    refresh();
}
</script>