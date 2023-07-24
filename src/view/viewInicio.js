const renderInicio = () => {
  return `<div class="container">
  <div class="row">
    <div class="col-12 col-lg-2 content1">
      <h2>Avisos</h2>
      <div class="avisos">
        <div class="aviso">
          <h5>Atente-se aos horários</h5>
          <p>
            Horários de saída/entrada: manhã (7h e 12:15), tarde (13h e
            17:15)
          </p>
        </div>

        <div class="aviso">
          <h5>Nome nas garrafinhas</h5>
          <p>Marque as garrafinhas com os nomes dos donos</p>
        </div>

        <div class="aviso">
          <h5>Fechamento dos portões</h5>
          <p>
            Portões serão fechados 5 minutos após os horários de
            entrada/saída. Para entrada ou solicitações, interfonar no
            portão lateral
          </p>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-8 content2" id="news-container">
      <h2>Mural</h2>
      <div id="news-content">
        <!-- News content goes here -->
        <div class="card">
          <img
            src="jardim-escola.jpg"
            class="card-img-top"
            alt="Jardim Renovado"
          />
          <div class="card-body">
            <h5 class="card-title">
              Jardim Renovado: Um Recanto de Cores
            </h5>
            <p class="card-text">
              Descubra o novo jardim da escola, agora revitalizado e cheio
              de vida. Um espaço encantador que estimula a imaginação e a
              conexão com a natureza. Venha explorar esse recanto repleto
              de cores e surpresas!
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="dia-das-maes.jpg"
            class="card-img-top"
            alt="Celebrando o Amor Materno"
          />
          <div class="card-body">
            <h5 class="card-title">
              Celebrando o Amor Materno: Dia das Mães na Escola
            </h5>
            <p class="card-text">
              Venha participar conosco da emocionante celebração do Dia
              das Mães na nossa escola. Um dia especial repleto de amor,
              gratidão e momentos inesquecíveis, onde as mães serão
              homenageadas e teremos atividades especiais para fortalecer
              os laços familiares. Não perca essa oportunidade de celebrar
              o amor materno e compartilhar momentos especiais com nossas
              mães e suas famílias!
            </p>
          </div>
        </div>
        <!-- Repeat the news content as needed -->
      </div>
    </div>

    <div class="col-12 col-lg-2 content3">
      <h2 class="mb-4">Calendário</h2>
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">2 de Junho</h5>
          </div>
          <p class="mb-1">Simulado</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">7 de junho</h5>
          </div>
          <p class="mb-1">Festa Junina</p>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Data 3</h5>
          </div>
          <p class="mb-1">Evento 3</p>
        </a>
      </div>
    </div>
  </div>
</div>`;
};

export default renderInicio;
