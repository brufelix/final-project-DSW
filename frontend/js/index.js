//(() => {
//  'use strict';

  var alldoom = JSON.parse(localStorage.getItem("listTodos")) || [];

  // Elements
  const buttonElement = document.getElementById('bt3');

  const inputElement = document.getElementById('input_txt');

  const div_info = document.getElementById('divtag');


  console.log(inputElement.value);

  function add(){
    var input_txt = inputElement.value;

    div_info.innerHTML = "";

    const doom_task = `
    <div>   
    <button id='bt1' > ${input_txt} </button>
    </div> 
    <br>
    `;

    alldoom.push(doom_task);
    inputElement.value = "";
    renderAll();
    saveStorage();
  }

  function fetch_cep(){
    const URL = `https://rickandmortyapi.com/api/character/1`;

    const request = fetch(URL);

    request
      .then(date => date.json())
      .then(date => {
        add();
      });
  }

//})();