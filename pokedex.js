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
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
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