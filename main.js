class PhotoCarousel extends HTMLElement { //описание веб компонента
    connectedCallback() {
        this._photoIndex = 0;
        this._photos = this.getAttribute('photos').split(','); //создание 

        this.innerHTML = '<h2>'+ this.getAttribute('title') + '</h2>' +
        '<h4>by '+ this.getAttribute('author') + '</h4>' +
        '<div class="image-container"></div>' +
        '<button class="back">&lt</button>' +
        '<button class="forward">&gt</button>';

        this.showPhoto();

        this.querySelector("button.back").addEventListener("click", event => this.onBackButtonClick(event));

        this.querySelector("button.forward").addEventListener("click", event => this.onForwardButtonClick(event));
    }

    showPhoto(){
        this.querySelector(".image-container").style.backgroundImage = `url(${this._photos[this._photoIndex]})`
    }

    onBackButtonClick(event){
        if(this._photoIndex == 0){
            this._photoIndex = this._photos.length - 1;
        }else{
            this._photoIndex--;
        }
        this.showPhoto();
    }


    onForwardButtonClick(event){
        if(this._photoIndex == this._photos.length - 1){
            this._photoIndex = 0;
        }else{
            this._photoIndex++;
        }
        this.showPhoto();
    }

    }
    if (!customElements.get('wcia-photo-carousel')) {
    customElements.define('wcia-photo-carousel', PhotoCarousel);
    }