import Detail from './index';


Detail.route = `/pizzas/:id`
Detail.getData = async function ({ id }) {
    const response = await fetch(`http://localhost:3000/pizzas/${id}`);
    return {
        pizza: await response.json()
    }
}
Detail.getData = async(params,query)=>{
    const getComments = await fetch ('http://localhost:3000/comments');
    return {
        comments: await getComments.json()
    };   
}

export default Detail;