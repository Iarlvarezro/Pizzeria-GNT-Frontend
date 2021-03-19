export class PageService {
    static open(){
        this._menu.classList.remove('on-big');
        this._backdrop.removeAttribute('hidden');
        document.body.classList.add('block-scroll');
    }
    static close(){
        this._menu.classList.add('on-big');
        this._backdrop.setAttribute('hidden', '');
        document.body.classList.remove('block-scroll');
    }
    static get _menu(){
        return document.getElementById('pizza-menu');
    }
    static get _backdrop(){
        return document.getElementById('backdrop');
    }
}