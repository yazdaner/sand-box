<template>
    <div>
        <LayoutsLacalStorage />
        <h1>index</h1>
        <NuxtLink to="/about">about link</NuxtLink>
        <br>
        <button @click="goToPost">go to post</button>
        <button @click="setChangeLayout()">change layout</button>
        <hr>

        <h1>{{ $hello('yazdan') }}</h1>
        <h2>count : {{ counter.count }}</h2>
        <button @click="counter.increment(4)">increment</button>
        <button @click="counter.decrement(4)">decrement</button>
        <br>
        <br>
        <NuxtImg src="/images/image.png" width="500" alt="" />
        <br>

        <button @click="liveToastBtn" type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div ref="liveToast" id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="..." class="rounded me-2" alt="...">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
const { $hello } = useNuxtApp();

import { useCounter } from '../stores/counter';
const counter = useCounter();
function goToPost() {
    navigateTo('/post')
}
function setChangeLayout() {
    setPageLayout('custom');
}


definePageMeta({
    // middleware : ()=>{
    //     console.log('inline middleware');
    // },
    middleware: 'log'
});



const { $bootstrap } = useNuxtApp();


const liveToast = ref(null);
function liveToastBtn(){
  const toastBootstrap = $bootstrap.Toast.getOrCreateInstance(liveToast.value)
    toastBootstrap.show()
}

</script>