window.addEventListener('load',function(){


    const valores=fetch('https://opentdb.com/api.php?amount=30&category=15').then(res=>{

    res.json().then(dados=>{


    });
    }).catch(erro=>{

        console.log(erro+" erro na requisição")

    });

});


    
function legenda(){
  fetch('https://opentdb.com/api.php?amount=30&category=15').then(legenda => legenda.json()
  .then(dados=>{
          var legenda1 = document.querySelector('#Categoria')
          legenda1.innerHTML += `${dados.category}`
          var legenda2 = document.querySelector('#Questao')
          legenda2.innerHTML += `${dados.question}`
          var legenda3 = document.querySelector('#Resposta')
          legenda3.innerHTML += `${dados.correct_answer}`
  }))
}

legenda()
