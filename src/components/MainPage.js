export class MainPage extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        this.shadowRoot.addEventListener('submit', (event) => {

          // TODO - Validar 
          event.preventDefault()

          this.dispatchEvent(new CustomEvent('logged', {
            bubbles: true,
            composed: true,
            detail: "composed"
          }))
      })

    }
    
    connectedCallback() {
        this.render();
    }    

    render() {
        this.shadowRoot.innerHTML = /* html */`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <main>
        <form>
          <img class="mb-4" src="./iglesia_parroquial_sant_vicent_ferrer.png" alt="" width="300" >
          <h1 class="mb-3 fw-normal">Validate por favor</h1>
    
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Dirección Email</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Contraseña</label>
          </div>
    
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="rememberme"> Recuerdame
            </label>
          </div>
          <a href="#"><small>(¿No tienes cuenta aún? apuntaté aqui)</small></a>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Validar</button>
          <p></p>
          <img class="mb-2" src="parroquia_inmaculada_concepcion.png" alt="" width="50" >&copy; 2022
          <div class="container">
        </form>
        </main>
        `;
    }    
}

