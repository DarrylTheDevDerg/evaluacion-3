// Función de desbloqueo de los controles de filtro.
function unlockControls() {
      document.getElementById('filterID').disabled = false;
      document.getElementById('resetFilter').disabled = false;
      document.getElementById('filterType').disabled = false;
}

const button = document.getElementById('loadDataButton');

button.addEventListener('click', () => {
    button.disabled = true; // Deshabilita el botón para evitar múltiples clics.

    unlockControls(); // Habilita los controles de filtro.

    setTimeout(() => {
        button.remove();
    }, 10); // Espera 1 segundo antes de cargar los datos.
});

let allDatos = []; // Se guardan todos los datos para aplicar los filtros apropiadamente.

async function cargarDatos() {
    try {
        const res = await fetch('/api/datos');
        const datos = await res.json();
        allDatos = datos; // Guardado completo de los datos en una variable global.

        renderCards(allDatos); // Renderiza todos los datos al presionar el botón de cargado.
    } catch (error) {
        console.error('Error al cargar los datos:', error); 
    }
}

function renderCards(datos) {
    const contenedor = document.getElementById('cardsContainer');
    contenedor.innerHTML = ''; // Borra las cartas previas para dar lugar a las nuevas / filtradas.

    datos.forEach(item => {
        // Contenedor principal de la carta en una grilla.
        const col = document.createElement('article');
        col.className = 'col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center';

        // La carta propiamente tal, con un fondo de imagen.
        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm';
        card.style = "width: 100%; height: 100% max-height: 23rem; background-image: url('/assets/img/bg.jpg');";

        // El cuerpo de la carta, lo que contendrá el texto y la imagen del objeto.
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center';
        cardBody.style = "height: 300px;";

        // El nombre del objeto, como título de la carta.
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = item.nombre;
        title.style = "font-weight: bolder; text-align: center; color: aliceblue;";

        // La ID del objeto, como subtítulo debajo del nombre.
        const id = document.createElement('p');
        id.className = 'card-text';
        id.textContent = `ID: ${item.id}`;
        id.style = "color: aliceblue;";

        // Tipo de objeto, determinando si es Sólido, No sólido, Líquido o Ítem.
        const type = document.createElement('p');
        type.className = 'card-text';
        type.textContent = `Tipo: ${item.tipo}`;
        type.style = "color: aliceblue;";

        // La imagen del objeto, con una condicional que permite asignar un GIF si el ID es 11, o una imagen PNG para los demás IDs.
        // En caso de que no exista una imagen, se usará un placeholder de texto con el nombre del objeto.
        const img = document.createElement('img');
        if (item.id == 11) {
            img.src = `/assets/img/${item.id}.gif`; // Asigna el GIF del item con ID 11.
        }
        else
        {
            img.src = `/assets/img/${item.id}.png`; // Asigna la imagen del item.
        }
        img.className = 'card-img-top';
        img.alt = item.nombre;
        img.style = "width: 50%; height: 50%; object-fit: cover;"; 

        // Combina todos los elementos creados en el siguiente orden: 
        // En el cuerpo de la carta: Imagen, Título, ID y Tipo.
        // Luego, agrega el cuerpo de la carta a la carta misma, y finalmente la carta al contenedor principal.
        cardBody.appendChild(img);
        cardBody.appendChild(title);
        cardBody.appendChild(id);
        cardBody.appendChild(type);
        card.appendChild(cardBody);
        col.appendChild(card);
        contenedor.appendChild(col);
    });
}

// Función para aplicar los filtros seleccionados por el usuario, considerando tanto la ID como el tipo.
function applyFilters() {
    const type = document.getElementById('filterType').value.trim();
    const id = document.getElementById('filterID').value.trim().toLowerCase();

    // Recoge los datos previamente guardados en la variable global.
    let filtered = allDatos;

    // Filtrado de los datos, según el tipo y la ID.
    if (type) {
        filtered = filtered.filter(item => item.tipo === type); // Filtra por tipo de objeto (Sólido, No sólido, Líquido o Ítem).
    }

    if (id) {
        filtered = filtered.filter(item => item.id.toString().toLowerCase().includes(id)); // Filtra por ID del objeto, permitiendo coincidencias parciales.
    }

    // Renderizado de las cartas filtradas.
    renderCards(filtered);
}


document.getElementById('filterType').addEventListener('change', applyFilters); // Permite una busqueda dinamica mientras se cambia el tipo de filtro.
document.getElementById('filterID').addEventListener('input', applyFilters); // Permite una busqueda dinamica mientras se escribe.

// Reiniciado de los filtros.
document.getElementById('resetFilter').addEventListener('click', () => {
    document.getElementById('filterType').value = '';
    document.getElementById('filterID').value = '';
    renderCards(allDatos);
});