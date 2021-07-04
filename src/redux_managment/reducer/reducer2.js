const Reducer_2=(state=null,action)=>{
    switch (action.type) {
        case "SET_R2":
            return action.payload
            break;
        case "RESET_R2":
            return null
            break;    
        default:
            return state
    }
}

export default Reducer_2