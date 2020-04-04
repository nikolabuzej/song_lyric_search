export const reducer=(state,action)=>{
    switch (action.type) {
        case 'GET_TOP_10':
            return {...state,
                tracks:action.payload,
                
                }
        case 'SEARCHED_SONGS':
            return{
                tracks:action.payload,
               
                
            }   
    
        default:return state

    }

}