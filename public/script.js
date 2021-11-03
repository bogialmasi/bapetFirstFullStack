feltolt();

async function feltolt() {
    const valasz = await fetch("../data/filmek.json");
    const filmek = await valasz.json();
    
    let filmHTML= "";
    for (film of films) {
        filmHTML+= '<div class="mx-auto">';
        filmHTML+= '<table class="table">';
        filmHTML+= '<thead><tr>';
        filmHTML+= '<th scope="col">Sorszám</th>';
        filmHTML+= '<th scope="col">Cím</th>';
        filmHTML+= '<th scope="col">Megjelenés</th>';
        filmHTML+= '<th scope="col">Hossz</th>';
        filmHTML+= '</tr></thead>';
        filmHTML+= '<tbody><tr>';
        filmHTML+= '<th scope="row">1</th>';
        filmHTML+= `<td>${film.id}</td>`;
        filmHTML+= `<td>${film.cim}</td>`;
        filmHTML+= `<td>${film.ev}</td>`;
        filmHTML+= `<td>${film.hossz}</td>`;
        filmHTML+= '</tr></tbody></table>';
        filmHTML+= `</div>`;
    }
    document.getElementById('film').innerHTML = filmHTML;
}