const renderGaleria = () => {
  return `
  <div class="container">
  <h1>Galeria de Fotos</h1>

  <div class="gallery">
    <div id="evento1" class="event">
      <img class="main-photo" src="https://picsum.photos/200" alt="Foto principal evento 1" />
      <p class="description">Descrição do Evento 1</p>
      <div id="carousel1" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://picsum.photos/50" alt="Foto 1 Evento 1" />
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/50" alt="Foto 2 Evento 1" />
          </div>
          <!-- Adicione mais fotos do evento 1 aqui -->
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div id="evento2" class="event">
      <img class="main-photo" src="https://picsum.photos/50" alt="Foto principal evento 2" />
      <p class="description">Descrição do Evento 2</p>
      <div id="carousel2" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://picsum.photos/50" alt="Foto 1 Evento 2" />
          </div>
          <div class="carousel-item">
            <img src="https://picsum.photos/50" alt="Foto 2 Evento 2" />
          </div>
          <!-- Adicione mais fotos do evento 2 aqui -->
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>`;
};

export default renderGaleria;
