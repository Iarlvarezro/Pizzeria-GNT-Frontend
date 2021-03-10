import { OKEstrategy } from './okestrategy.js';
import { ErrorsEstrategy } from './errorsestrategy.js';


const estrategies = { ...OKEstrategy, ...ErrorsEstrategy }

export async function resolve(response) {
    const { status } = response
    return await estrategies[status](response)
}
