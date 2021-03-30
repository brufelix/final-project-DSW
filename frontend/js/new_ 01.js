(() => {
  'use strict';

  function render_info(name, status, species, gender, image){

    const div_info = document.getElementById('divtag');

    const task = `
    <div>   
    <input style="width: 600px; height: 20px; position: relative; left: 250px;" type="text" name="novatarefa" maxlength="70%" placeholder="Nova tarefa"> 
    <button id='bt1' > + </button>
    </b><button id='bt2' > X </button>
    <button id='bt3' > UPDATE </button>
    </div> 
    <br>
    `;

    const tableInfo = `
    <table  class="table" border="1">
    <tr>
      <th><h2>Rick and morty</h2></th>
      <th><img src="${image}" alt="Anarc" width="100" height="100"></th>
      <th><h3>Que comecem os Jogos</h3></th>
    </tr>
    <tr>
      <th></th>
      <th>NOME DO INFELIZ</th>
      <th>${name}</th>
    </tr>
    <tr>
      <th></th>
      <th>A PRAGA TA VIVA?</th>
      <th>${status}</th>
    </tr>
    <tr>
      <th></th>
      <th>QUAL A ESPÉCIE DESSE INFRIOR?</th>
      <th>${species}</th>
    </tr>
    <tr>
      <th></th>
      <th>QUAL O SEXO DESSE GAY?</th>
      <th>${gender}</th>
    </tr>
  </table>`;

  let test = "";

  for(var i = 0; i < 5; i++){
    test = test + `
    <div>   
    <button id='bt1' > ${i} </button>
    </div> 
    <br>
    `;
  }


  div_info.innerHTML = test;
}

  function fetch_cep(){
    const URL = `https://rickandmortyapi.com/api/character/1`;

    const request = fetch(URL);

    request
      .then(date => date.json())
      .then(date => {
        const { name, status, species, gender, image } = date;
        render_info(name, status, species, gender, image);
      });
  }

  /*
function  fetch_local(){
  const div_info = document.getElementById('divtag');

  const URL = `http://localhost:3333/`;

  const request = fetch(URL);

  request
    .then(date => date.json())
    .then(date => {
      const { message } = date;

      div_info.innerHTML = `<p>${message}</p>`;

      });

}
*/
 fetch_cep();
// fetch_local();

})();