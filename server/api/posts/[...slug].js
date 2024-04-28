export default defineEventHandler(async (event) => {
    return { 
        data : {
            id : event.context.params.slug
        }
    }
})