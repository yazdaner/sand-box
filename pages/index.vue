<template>
    <div>
            <LayoutsLacalStorage />
        <h1>index</h1>
        <NuxtLink to="/about">about link</NuxtLink>
        <br>
        <button @click="goToPost">go to post</button>
        <button @click="setChangeLayout()">change layout</button>
    </div>
</template>
<script setup>
    function goToPost(){
        navigateTo('/post')
    }
    function setChangeLayout(){
        setPageLayout('custom');
    }
</script>