<template>

    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="title" />
        <Style type="text/css" children="body { background-color: green; }"></Style>
        <Body class="test-2"></Body>
    </Head>


    <div>
        <h1>index post</h1>
    </div>
</template>

<script setup>

const title = ref("new title");

useHead({
    title : 'yazdan',
    bodyAttrs : {
        class : 'test-3'
    }
});

</script>