async function getMostAccessed() {
    const response = await fetch('https://labs.inforcedata.com.br/desafio-frontend/cloudtags.json');
    const json = await response.json();

    for (var i in json) {
        var link = document.createElement('a');

        link.textContent = json[i].tag;
        link.setAttribute('href', json[i].link);

        document.querySelector('.container_mais_acessados div').append(link);
    }

}
getMostAccessed()


async function getNewsArticles() {
    const response = await fetch('https://labs.inforcedata.com.br/desafio-frontend/noticias.json');
    const json = await response.json();

    for (var i in json) {
        var li = document.createElement('li');

        li.innerHTML =
            '<img src="' + json[i].capa + '" alt="img_one" />' +
            '<div>' +
            '<h4>' + json[i].titulo + '</h4>' +
            '<p>' + json[i].sumario + '</p>' +
            '<span><a href="' + json[i].link + '">Saiba mais...</a></span>' +
            '</div>';

        document.querySelector('.container_ultimas_news ul').append(li);

    }

}
getNewsArticles()


async function getBanner() {
    const response = await fetch('https://labs.inforcedata.com.br/desafio-frontend/banners.json');
    const json = await response.json();

    for (var i in json) {

        var li = document.querySelector('li');

        if (i == 0) {
            li.style.display = 'block';
        } else {
            li.style.display = 'none';
        }

        li.classList.add('slide');

        li.innerHTML =
            '<span>' +
            '<h3>' + json[i].titulo + '</h3>' +
            '<a href="' + json[i].call_to_action + '">Saber mais...</a>' +
            '</span>' +
            '<img src="' + json[i].imagem + '">' +
            '<div class="prev" onclick="prev();">prev</div>' +
            '<div class="next" onclick="next();">next</div>';

        document.querySelector('.container_banner ul').append(li);

    }

}
getBanner();


async function getVitrine() {
    const response = await fetch('https://labs.inforcedata.com.br/desafio-frontend/vitrines.json');
    const json = await response.json();

    var div_one = document.querySelector('#card_one');
    var div_two = document.querySelector('#card_two');
    var one = '';
    var two = '';

    for (let index = 0; index <= 2; index++) {
        one = one +
            '<div class="card">' +
            '<div class="content">' +
            '<div class="img"><img src="' + json[index].capa + '" alt="" ></div>' +
            '<div class="details">' +
            '<div class="name">' + json[index].tipo + '</div>' +
            '<div class="job">' + json[index].bairro + ' - ' + json[index].UF + '</div>' +
            '</div>' +
            '<div class="media-icons">' +
            '<a href="#"><i class="fas fa-bed"></i><small> ' + json[index].quartos + ' </small></a>' +
            '<a href="#"><i class="fas fa-car"></i><small> ' + json[index].vagas + ' </small></a>' +
            '<a href="#"><i class="fas fa-shower"></i><small> ' + json[index].banheiros + ' </small></a>' +
            '<a href="#"><i class="fas fa-shower"></i><small> ' + json[index].metragem + 'm² </small></a>' +
            '</div>' +
            '<a href="' + json[index].link + '">Button</a>' +
            '</div >' +
            '</div >'
            ;
    }

    for (let index = 3; index <= 5; index++) {
        two = two +
            '<div class="card">' +
            '<div class="content">' +
            '<div class="img"><img src="' + json[index].capa + '" alt="" ></div>' +
            '<div class="details">' +
            '<div class="name">' + json[index].tipo + '</div>' +
            '<div class="job">' + json[index].bairro + ' - ' + json[index].UF + '</div>' +
            '</div>' +
            '<div class="media-icons">' +
            '<a href="#"><i class="fas fa-bed"></i><small> ' + json[index].quartos + ' </small></a>' +
            '<a href="#"><i class="fas fa-car"></i><small> ' + json[index].vagas + ' </small></a>' +
            '<a href="#"><i class="fas fa-shower"></i><small> ' + json[index].banheiros + ' </small></a>' +
            '<a href="#"><i class="fas fa-shower"></i><small> ' + json[index].metragem + 'm² </small></a>' +
            '</div>' +
            '<a href="' + json[index].link + '">Button</a>' +
            '</div >' +
            '</div >'
            ;
    }

    div_one.innerHTML = one;
    div_two.innerHTML = two;

    document.querySelector('.container_vitrine_imoveis .main-card #card_one').append(div_one);
    document.querySelector('.container_vitrine_imoveis .main-card #card_two').append(div_two);

}
getVitrine();


