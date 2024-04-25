<template>
    <div>
            <LayoutsLacalStorage />
        <h1>index</h1>
        <NuxtLink to="/about">about link</NuxtLink>
        <br>
        <button @click="goToPost">go to post</button>
        <button @click="setChangeLayout()">change layout</button>
        <hr>
      
        <h2>count : {{ counter.count }}</h2>
        <button @click="counter.increment(4)">increment</button>
        <button @click="counter.decrement(4)">decrement</button>
    </div>
</template>
<script setup>

    import { useCounter } from '../stores/counter';
    const counter = useCounter();
    function goToPost(){
        navigateTo('/post')
    }
    function setChangeLayout(){
        setPageLayout('custom');
    }
</script>