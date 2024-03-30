<template>
    <div>
        <h1>index</h1>
        <NuxtLink to="/about">about link</NuxtLink>
        <br>
        <button @click="goToPost">go to post</button>
    </div>
</template>
<script setup>
    function goToPost(){
        navigateTo('/post')
    }
</script>