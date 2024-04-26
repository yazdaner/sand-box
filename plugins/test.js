export default defineNuxtPlugin((nuxtApp)=>{

    // return nuxtApp.provide('hello',(name) => `hello ${name} !`)

    return {
        provide : {
            'hello' : (name) => `hello ${name} !!!!!!`
        }
    }
})