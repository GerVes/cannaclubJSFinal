

const urlStrains = 'https://weed-strain1.p.rapidapi.com/?ordering=-strain';
const listaStrains = document.querySelector("#lista-Strains");

fetch(urlStrains)
    .then( (response) => response.json())
    .then( (data) => {
        data.forEach(genetics => {
            const tr = document.createElement("tr");
            tr.innerHTML = "<td>"  + genetics.strain + "</td> <td>"  + genetics.thc + "</td> <td>" + genetics.cbd + "</td>";
            listaStrains.append(tr)
            console.log(data)
        })
        
    })
    