export class GerenciadorDeMusicas {
    #listaDeMusicas;
    #audioMusicas;

    constructor() {
        this.#listaDeMusicas = document.querySelectorAll(".tecla");
        this.#audioMusicas = document.querySelectorAll(".som");
        if (this.#listaDeMusicas.length !== this.#audioMusicas.length) {
            console.error("Erro: O número de botões não corresponde ao número de áudios.");
            return;
        }

        this.#listaDeMusicas.forEach((tecla, index) => {
            tecla.addEventListener("click", () => {
                this.#tocarMusica(index);
                this.#ativarBotao(index);
            });
        });
    }
    #tocarMusica(index) {
        const audio = this.#audioMusicas[index];
        if (!audio) {
            console.error("Áudio não encontrado para a tecla",index);
            return;
        }
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }

        
    }

    tocarMusicaPlubic(index) {
        if (index < 0 || index >= this.#audioMusicas.length) {
            console.error("Índice inválido.");
            return;
        }
        this.#tocarMusica(index);
    }
    
    #ativarBotao(index) {
        const tecla = this.#listaDeMusicas[index];
        if(tecla.classList.contains("ativa")){
            tecla.classList.remove("ativa")
        }else{
            this.#listaDeMusicas.forEach(tecla => tecla.classList.remove("ativa"));
            tecla.classList.add("ativa");
        };

    }


}
