import './hello-world-button.css';
class HelloWorldButton{
    render(){
        const button = document.createElement('button');
        const body= document.querySelector('body')
        button.innerHTML = 'Hello world 1';
        button.classList.add('hello-world-button');
        body.appendChild(button);
    }
}

export default HelloWorldButton;