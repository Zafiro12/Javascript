var contenedor = document.getElementById("contenedor");
function rombo(){
    let n = parseInt(document.getElementById("radio").value);
    let rombo = "";
    for(let i = 1; i <= n; i++){
        rombo += "<p>";
        for (let j = 1; j <= n - i; j++){
            rombo += "&nbsp;";
        }
        for(let j = 1; j <= i; j++){
            rombo += "*";
        }
        rombo += "</p>";
    }
    for(let i = n - 1; i > 0; i--){
        rombo += "<p>";
        for (let j = 1; j <= n - i; j++){
            rombo += "&nbsp;";
        }
        for(let j = 1; j <= i; j++){
            rombo += "*";
        }
        rombo += "</p>";
    }
    contenedor.innerHTML = rombo;
}
function romboVacio() {
    let n = parseInt(document.getElementById("radio").value);
    let rombo = "";

    for(let i = 1; i <= n; i++){
        rombo += "<p>";
        for (let j = 1; j <= n - i; j++){
            rombo += "&nbsp;";
        }
        if (i > 1){
            rombo += "*";
            for(let j = 1; j < 2*i; j++){
                rombo += "&nbsp;";
            }
            rombo += "*";
        } else {
            rombo += "&nbsp;";
            rombo += "*";
        }
        rombo += "</p>";
    }
    for(let i = n - 1; i > 0; i--){
        rombo += "<p>";
        for (let j = 1; j <= n - i; j++){
            rombo += "&nbsp;";
        }
        if (i !== 1){
            rombo += "*";
            for(let j = 1; j < 2*i; j++){
                rombo += "&nbsp;";
            }
            rombo += "*";
        } else {
            rombo += "&nbsp;";
            rombo += "*";
        }
        rombo += "</p>";
    }
    contenedor.innerHTML = rombo;
}