import { Count } from "../../types";

const stateInit = {
    count: 0 ,
    // title: "PHong Sado",
    // content: "accc"
}

const count = (state = stateInit, action) =>{
    console.log("state reducers====", state);
    console.log("state reducers====", action);
switch(action.type){
    case Count.PLUS:
        return {
            ...state,
            count: action.payload
        };
        case Count.MINUS:
        return {
            ...state,
            count: action.payload
        };
        case Count.CLEAN:
            return {
                ...state,
              count: 0
            };
        default:
        return { ...state };
}
};
export default count;