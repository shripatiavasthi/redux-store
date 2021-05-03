import axios from 'axios';
export const deleteCard = (id) => {
    return{
        type : 'DELETE_USER',
        id : id
    }
}
export const fetchUser = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(({ data })=> {dispatch({ type:'FETCH_USER', payload : data})

        })
    }
}