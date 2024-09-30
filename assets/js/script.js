const VideoModule = (function() {
    
    function setVideoURL(url, iframeId) {
        const iframe = document.getElementById(iframeId);
        if (iframe) {
            iframe.setAttribute('src', url); 
        }
    }

    // Función pública que recibe la URL y el ID, y llama a la función privada
    return {
        loadVideo: function(url, iframeId) {
            setVideoURL(url, iframeId);
        }
    };
})();

// Clase padre Multimedia
class Multimedia {
    constructor(url) {
        let _url = url; 
        
        this.getUrl = function() { 
            return _url;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url); 
        this.id = id; 
    }

    playMultimedia() {
        
        VideoModule.loadVideo(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        const urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        document.getElementById(this.id).setAttribute('src', urlConTiempo);
    }
}


const musica = new Reproductor("https://www.youtube.com/embed/VIDEO_ID_MUSICA", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/VIDEO_ID_PELICULA", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/VIDEO_ID_SERIE", "series");


musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio de un video
musica.setInicio(60); 