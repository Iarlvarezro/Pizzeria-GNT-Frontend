import About from './index'

About.route = '/about';
About.getData = async function(){
    return {foo: 12};
}


export default About;