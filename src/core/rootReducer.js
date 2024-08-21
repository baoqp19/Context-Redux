export const initialState = {
    message: "Hello F8",
    chatMessages: [
        
    ]
}

export const rootReducer = (state, action = {}) => {
    switch (action.type){
        case "message/update": {
            return {...state, message: action.payload};
        }

        case "chat/sendMessage": {
            /* 
            ...state.chatMessage là mảng ban đầu + action.payload
             là mới thêm vào gán cho
            */  
            return {...state, chatMessages: [...state.chatMessages, action.payload]}
        }

        default: {
            return state;
        }
    }
}

