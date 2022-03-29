const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/pokemon_error.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            
            console.log(data);
            
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            //console.log(pokeImg);

            let dataName = convertir_tipo_titulo(data.name);
            let dataType = convertir_tipo_titulo(data.types[0].type.name) //  Mejorar para permitir pokemones de 2 tipos, como "Rayquaza"  ... + " " + convertir_tipo_titulo(data.types[1].type.name);
            let dataHeight = data.height/10; // metros     Mejorar para  convertir a pies con pulgadas
            let dataWeight = data.weight/10; //kg    Mejorar para convertir a libras
            let dataMove1 = convertir_tipo_titulo(data.moves[0].move.name);
            let dataMove2 = convertir_tipo_titulo(data.moves[1].move.name);
            let dataMove3 = convertir_tipo_titulo(data.moves[3].move.name);
            console.log(dataName, dataType, dataHeight, dataWeight, dataMove1, dataMove2, dataMove3);
            pokeData(dataName, dataType, dataHeight, dataWeight, dataMove1, dataMove2, dataMove3);

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData = (dataName, dataType, dataHeight, dataWeight, dataMove1, dataMove2, dataMove3) => {
    document.getElementById("setName").innerHTML = "<strong>Name:</strong> " + dataName;
    document.getElementById("setType").innerHTML = "<strong>Type:</strong> " + dataType;
    document.getElementById("setHeight").innerHTML = "<strong>Height:</strong>  " + dataHeight + "m";
    document.getElementById("setWeight").innerHTML = "<strong>Weight:</strong>  " + dataWeight + "kg";
    document.getElementById("setMoves").innerHTML = dataMove1 + ", " + dataMove2 + " & " + dataMove3 + ".";
}


// Get the input field
var input = document.getElementById("pokeName");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(keyboardEvent) {
  // Number 13 is the "Enter" key on the keyboard
  if (keyboardEvent.keyCode === 13) {
    // Cancel the default action, if needed
    keyboardEvent.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchbtn").click();
  }
});

function convertir_tipo_titulo(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

