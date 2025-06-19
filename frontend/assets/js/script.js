async function unlockControls() {
      document.getElementById('filterInput').disabled = false;
      document.getElementById('filterBtn').disabled = false;
      document.getElementById('resetBtn').disabled = false;
      document.getElementById('typeSelect').disabled = false;
}

async function cargarDatos() {
    try {
        const res = await fetch('/api/datos');
        const datos = await res.json();
        const contenedor = document.getElementById('cardsContainer');

        contenedor.className = 'row g-4'; // Clase de Bootstrap para el diseño responsivo.
        datos.forEach(item => {
            const col = document.createElement('article');
            col.className = 'col-sm-5 col-md-4 col-lg-3 d-flex justify-content-center'; // Clases de Bootstrap para el diseño responsivo.

            const row = document.createElement('div');
            row.className = 'row g-2'; // Crea un elemento div para la fila de cartas.
            row.style = "display: flex; justify-content: center; align-items: center;"; // Estilo para centrar la fila.

            const card = document.createElement('div');
            card.className = 'card h-70 shadow-sm';
            card.style = "border-width: 10px; border-color: rgb(110, 82, 44); padding: 10px 10px; background-color: burlywood"; // Estilo de la carta.
            card.id = `card-${item.id}`; // Asigna un ID único a la carta basado en el ID del item.

            const img = document.createElement('img');
            if (item.id == 11) {
                img.src = `/assets/img/${item.id}.gif`; // Verifica que el ID del item esté presente.
            }
            else
            {
                img.src = `/assets/img/${item.id}.png`; // Asigna la imagen del item.
            }

            img.className = 'card-img-top';
            img.alt = item.nombre; // Asigna el nombre del item como texto alternativo de la imagen.
            img.style = "width: 100%; height: 200px; object-fit: cover;"; // Estilo de la imagen.

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body'; // Crea un elemento div para el cuerpo de la carta."

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = item.nombre; // Asigna el nombre del item a la carta.
            title.style = "text-align: center; font-weight: bolder;"; // Estilo del título.

            const id = document.createElement('p');
            id.className = 'card-text';
            id.textContent = `ID: ${item.id}`; // Muestra el ID del item.
            id.style = "text-align: center; font-weight: bold;"; // Estilo del ID.

            const type = document.createElement('p');
            type.className = 'card-text';
            type.textContent = `Tipo: ${item.tipo}`; // Muestra el tipo del item.
            type.style = "text-align: center;"; // Estilo del tipo.

            cardBody.appendChild(img); // Añade la imagen al cuerpo de la carta.
            cardBody.appendChild(title);
            cardBody.appendChild(id);
            cardBody.appendChild(type);
            card.appendChild(cardBody);
            col.appendChild(card);
            col.appendChild(row); // Añade la fila a la columna.
            contenedor.appendChild(col); // Añade la carta al contenedor.
        });
    } catch (error) {
        const contenedor = document.getElementById('cardsContainer');
        const errorMessage = document.createElement('article');
        errorMessage.className = 'alert alert-danger';
        errorMessage.textContent = 'Error al cargar los datos.';
        contenedor.appendChild(errorMessage); // Muestra un mensaje de error si falla la carga de datos.
    }
}   

const button = document.getElementById('loadDataButton');
const filterBtn = document.getElementById('filterBtn');
const resetBtn = document.getElementById('resetBtn');
const input = document.getElementById('filterInput');

button.addEventListener('click', () => {
    button.disabled = true; // Deshabilita el botón para evitar múltiples clics.

    unlockControls(); // Habilita los controles de filtro.

    setTimeout(() => {
        button.remove();
    }, 10); // Espera 1 segundo antes de cargar los datos.
});

async function filterById(id) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const isMatch = id ? card.id === `card-${id}` : true;
    card.dataset.idMatch = isMatch;
  });
}

async function filterByType(type) {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const indexCut = text.indexOf(`tipo: ${type.toLowerCase()}`)

    const cutText = text.slice(indexCut, text.length);

    console.log(cutText);

    const isMatch = type ? text.includes(`tipo: ${type.toLowerCase()}`) : true;
    card.dataset.typeMatch = isMatch;
  });
}

async function initCardFilter() {
  const idValue = document.getElementById('filterInput').value.trim();
  const cards = document.querySelectorAll('.card');

  await filterById(idValue);

  cards.forEach(card => {
    const idMatch = card.dataset.idMatch === "true";

    if (idMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

async function applyFilterByType()
{
  const typeValue = document.getElementById('typeSelect').value;
  const cards = document.querySelectorAll('.card');

  await filterByType(typeValue);

  cards.forEach(card => {
    const typeMatch = card.dataset.typeMatch === "true";

    if (typeMatch) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

async function resetFilters() {
  const cards = document.querySelectorAll('.card');
  document.getElementById('filterInput').value = '';
  document.getElementById('typeSelect').value = '';

  cards.forEach(card => {
    card.style.display = 'block';
    delete card.dataset.idMatch;
    delete card.dataset.typeMatch;
  });
}

async function recargarDatos() {
    try {
        const res = await fetch('/api/datos');
        const datos = await res.json();

        const contenedor = document.getElementById('cardsContainer');
        contenedor.innerHTML = ''; // ✅ Clears previous cards before rendering new ones

        contenedor.className = 'row g-4';

        datos.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center';

            const card = document.createElement('div');
            card.className = 'card h-100 shadow-sm';
            card.style = "width: 100%; max-width: 18rem;";

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body text-center';

            const title = document.createElement('h5');
            title.className = 'card-title';
            title.textContent = item.nombre;

            const id = document.createElement('p');
            id.className = 'card-text';
            id.textContent = `ID: ${item.id}`;

            const type = document.createElement('p');
            type.className = 'card-text';
            type.textContent = `Tipo: ${item.tipo}`;

            cardBody.appendChild(title);
            cardBody.appendChild(id);
            cardBody.appendChild(type);
            card.appendChild(cardBody);
            col.appendChild(card);
            contenedor.appendChild(col);
        });

    } catch (error) {
        console.error('Error al cargar los datos:', error);
    }
}

document.getElementById('typeSelect').addEventListener('change', applyFilterByType);