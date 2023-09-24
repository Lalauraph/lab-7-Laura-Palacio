function createPost(name, message, imageURL) {
    const post = document.createElement("div");
    post.className = "post";

    const image = document.createElement("img");
    image.src = imageURL;

    const title = document.createElement("p");
    title.textContent = name;

    const content = document.createElement("p");
    content.textContent = message;

    post.appendChild(image);
    post.appendChild(title);
    post.appendChild(content);

    return post;
}

const publicacionesContainer = document.querySelector(".publicaciones-container");

for (let i = 1; i <= 826; i++) {
    const imageURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
    const publicacion = createPost(`Publicación ${i}`, "Esta es mi publicación número " + i + " esto es una prueba de generación de relleno por medio de funciones y ciclos", imageURL);
    publicacionesContainer.appendChild(publicacion);
}