<template>
    <div>
            <LayoutsLacalStorage />
        <h1>index</h1>
        <NuxtLink to="/about">about link</NuxtLink>
        <br>
        <button @click="goToPost">go to post</button>
        <button @click="setChangeLayout()">change layout</button>
        <hr>
        <h2>count : {{ count }}</h2>
        <button @click="increment">increment</button>
        <button @click="decrement">decrement</button>
    </div>
</template>
<script setup>
    function goToPost(){
        navigateTo('/post')
    }
    function setChangeLayout(){
        setPageLayout('custom');
    }
    const {count,increment,decrement} = useCounter();
</script>