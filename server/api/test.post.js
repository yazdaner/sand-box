export default defineEventHandler(async (event) => {
    
    const body = await readBody(event);
    const query = getQuery(event);

    return { 
        data : {
            name : 'yazdan',
            age : 20,
            body : body,
            query : query,
        }
    }
})