const url = "https://restcountries.com/v2/all"

const listaPaises = $('#listaPaises')
// const listaPaises = document.querySelector('#listaPaises')

const cardsPorPagina = 12
let paginaAtual = 1

fetch(url)
    .then(response => response.json())
    .then(data => {
        // a função 'Math.ceil()' arredonda o resultado da divisão para cima
        let totalPaginas = Math.ceil(data.length/cardsPorPagina)

        function mostrarPagina(pagina) {
            let inicio = (pagina -1)*cardsPorPagina
            let fim = inicio+cardsPorPagina
            listaPaises.empty()

            for(let i=inicio; i<fim && i<data.length; i++) {
                const pais = data[i]
                const div =  `
                <div class="card" style="width: 20rem; height: 25rem;">
                    <img src="${pais.flag}" class="card-img-top h-50" alt="bandeira_${pais.name}">
                <div class="card-body">
                    <h5 class="card-title pais">${pais.name}</h5>
                    <p class="card-text capital">${pais.capital}</p>
                    <p class="card-text regiao">${pais.region}</p>
                    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal-${pais.alpha2Code}">
                    Ver mais
                    </button>

                </div>
            </div>
            <br/>


            <div class="modal fade" id="modal-${pais.alpha2Code}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">${pais.name}</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                            <h1>${pais.name}</h1>
                            <img src="${pais.flag}" class="card-img-top h-50" width="50">
                            <p class="card-text">Capital: ${pais.capital}</p>
                            <p class="card-text">AlfaCode: ${pais.alpha2Code}</p>
                            <p class="card-text">Codigo telefone: ${pais.callingCodes}</p>
                            <p class="card-text">Regiao: ${pais.region}</p>
                            <p class="card-text">Sub regiao: ${pais.subregion}</p>
                            <p class="card-text">População: ${pais.population}</p>
                            <p class="card-text">Denominação: ${pais.demonym}</p>
                            </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
            </div>
                `
                listaPaises.append(div)
            }
        }
        function atualizarPagina() {
            $('#contador-pagina').text(`Página ${paginaAtual} de ${totalPaginas}`)
            $('#anterior').prop('disabled', paginaAtual===1)
            $('#proximo').prop('disabled', paginaAtual===totalPaginas)
            mostrarPagina(paginaAtual)
        }

        atualizarPagina()

        $('#anterior').click(() =>{
            if (paginaAtual>1) {
                paginaAtual--
                atualizarPagina()
            }
        })
        //------------------------
        $('#proximo').click(() =>{
            if (paginaAtual<totalPaginas) {
                paginaAtual++
                atualizarPagina()
            }
        })
        //------------------------

    })
    .catch(error => console.error(error))