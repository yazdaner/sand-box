export default defineNuxtRouteMiddleware((to,from)=>{
    console.log('middleware from dir');
    console.log(to.href);
    console.log(from.href);
    if(false) return abortNavigation();
    // else return navigateTo('/about');
});