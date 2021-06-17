
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type : INCREASE})
export const decrease = () => ({type : DECREASE})

const initialState = {
    number : 0
}

function counter(state=initialState, action) {
    switch (action.type) {
        case INCREASE :
            return {
                number : state.number +1
            }
        case DECREASE :
            return {
                number : state.number -1
            }
        default:
            return state;
    }
}

export default counter

// export 와 export default의 차이점은
// export는 여러개를 내보낼 수 있고
// export default는 단 한개만 보낼 수 있다
