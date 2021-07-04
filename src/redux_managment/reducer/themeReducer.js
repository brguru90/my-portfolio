const default_theme="light";

const Reducer=(state=default_theme,action)=>{
    switch (action.type) {
        case "SET_THEME":
            return action.payload
            break;
        case "RESET_THEME":
            return default_theme
            break;    
        default:
            return state
    }
}

export default Reducer