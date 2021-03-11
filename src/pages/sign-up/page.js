import SignUp from './index'

SignUp.route = '/sign'
SignUp.getData = async function (params, query) {
    const response = await fetch('http://localhost:3000/sign');
    return { sign: await response.json() }
}

export default SignUp;