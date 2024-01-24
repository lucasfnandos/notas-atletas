let atletas = [
  {
  nome: "Cesar Abascal",
  notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
  nome: "Fernando Puntel",
  notas:  [8, 10, 10, 7, 9.33]
  },
  {
  nome: "Daiane Jelinsky",
  notas: [7, 10, 9.5, 9.5, 8]
  },
  {
  nome: "Bruno Castro",
  notas: [10, 10, 10, 9, 9.5]
  }
  ];

  function obterDadosCompeticao(atletas){
      
      //ARRAY COM OS NOMES DOS ATLETAS
      let obterNomes = atletas.map(function(atleta){
          return atleta.nome  
      })
      
      //ARRAY COM AS NOTAS SORTIDAS DE MAIOR PARA MENOR
      let obterNotasSorted = atletas.map(function(atleta){ 
          return atleta.notas.sort(function(a, b){return b - a})
      })
      
      //ARRAY COM NOTAS VALIDAS PARA CALCULO DA MEDIA
      let obterNotasValidas = atletas.map(function(atleta){
          return atleta.notas.sort(function(a, b){return b - a}).slice(1,4)
      })
      
      //ARRAY COM MEDIAS
      let obterMedias = obterNotasValidas.map(function(nota){
          let soma = 0
          for(let i=0; i<nota.length; i++){
              soma = soma + nota[i]
          } return soma/nota.length
      })
      
      for(let i=0; i<atletas.length; i++){
      console.log(`Nome: ${obterNomes[i]}`)
      console.log(`Notas: [${obterNotasSorted[i]}]`)
      console.log(`Media Válida: ${obterMedias[i]}`)
      console.log("");
  }
  }
  obterDadosCompeticao(atletas);