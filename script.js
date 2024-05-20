var request = new XMLHttpRequest();
//endpoint https://xsmilex007.github.io/JS-API-example/mydata.json

// otvaramo konekciju prem endpointu, koristimo GET metodu izvršavanja  jer želimo dohvatiti podatke (SAMO dohvaćamo)

request.open("GET", "https://xsmilex007.github.io/JS-API-example/mydata.json", true);


// iniciramo GET request prema endpoint

request.send();


// ovdje implementiramo događaj nakon što smo dohvatili podatke- isparsat ćemo JSON pretvoriti ga u objekt te ga prikazati na stranici 

request.onload = function (result) {
    console.log(result.currentTarget.response);

    const obj = JSON.parse(result.currentTarget.response);

    let grad = obj.request.query; // San Francisvo, USA

    console.log("isparasani grad je " + grad);
    
    let country = obj.location.country;
    let regija = obj.location.region;
    let temperatura = obj.current.temparature;
    let uvIndex = obj.current.uv_index;

    console.log(`Country = ${country} | Regija = ${regija} | Temperatura = ${temperatura} | UV index = ${uvIndex} `);

    document.getElementById("grad").value = grad;
    document.getElementById("country").textContent = country;
    document.getElementById("regija").textContent = regija;
    document.getElementById("temperatura").textContent = temperatura;
    document.getElementById("uvindex").textContent = uvIndex;

};



