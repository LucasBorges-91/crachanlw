      //*variaveis
      // - let = pode ser alterada
      // - const = nao pode ser alterada

      //Objeto
      //const User = {
      //  name: "Lucas P. Borges",
      //  phone: 990292922,
      //  accept: true
      //}

      //Funcao
      //function showMeSomething() {
      //  alert('Amigo estou aqui!')
      //}

      //camelCase (uso para funcoes/variaveis)
      //PascalCase (eu uso para objetos)
      //snake_case (uso no android para nomes fixos nos documentos de traducao)

      //acessando a DOM
      //document.getElementById('userName').textContent = "Lucas P. Borges"
      //userName.textContent = "Lucas P. Borges"

      //acessando atributos do objeto
      //Links[social] = ele acessa o atributo que possuir a mesma referencia/nome passada na variavel social

      //dica - usar o mesmo nome da classe nos atributos facilitou o trabalho

      //Arrow functions
      //function nomeDafuncao( argumento ) {
      //
      //}
      //--
      // argumento => {
      //
      //}
      //com dois argumentos
      //( argumento, argumento2 ) => {
      //
      //}
      //sem argumentos
      //() => {
      //  
      //}

      const Links = {
        github: "LucasBorges-91",
        youtube: "RocketSeat",
        instagram: "_eulucasborges",
        facebook: "lucas.borges.56614",
        twitter: "rocketseat"
      }
      
      
      function changeSocialMediaLinks() {
        for( let li of socialLinks.children ) {
          const social = li.getAttribute('class')
          li.children[0].href  = `https://${social}.com/${Links[social]}`
        }
      }

      changeSocialMediaLinks()

      function getGitHutProfileInfos() {
        const url = `https://api.github.com/users/${Links.github}`
        //usamo o fetch para buscar a resposta da api, para usarmos a resposta precisamos das promises. Utilizando o then
        fetch( url )
        .then( response => response.json() )
        .then( data => {
          userName.textContent = data.name
          userLink.href = data.html_url
          userPhoto.src = data.avatar_url
          userBio.textContent = data.bio
          userLogin.textContent = data.login
        } )
      }

      getGitHutProfileInfos()
      
