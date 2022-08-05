const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=40"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// RECUPERO ELEMENTO CONTAINER DAL DOM

elementContainer = document.querySelector('.posts-list');








// CICLO PROPRIETA' OGGETTI E LI INSERISCO NEL DOM

for (let i = 0; i < posts.length; i++) {

    const element = posts[i];


    // CREO ELEMENTO POST E LO PUSHO SUL CONTAINER

    const elementPost = document.createElement('div');

    elementPost.className = 'post';

    elementContainer.append(elementPost);

    // CREO ELEMENTO POSTHEADER E LO PUSHO NEL SUO CONTAINER

    const elementPostHeader = document.createElement('div');

    elementPostHeader.className = 'post__header';

    elementPost.append(elementPostHeader);

    // CREO ELEMENTO POSTMETA E LO PUSHO NEL SUO CONTAINER

    const elementPostMeta = document.createElement('div');

    elementPostMeta.className = 'post-meta';

    elementPostHeader.append(elementPostMeta);

    // CREO ELEMENTO POSTMETAICON E LO PUSHO NEL SUO CONTAINER

    const elementPostMetaIcon = document.createElement('div');

    elementPostMetaIcon.className = 'post-meta__icon';

    elementPostMeta.append(elementPostMetaIcon);

    // CREO ELEMENTO POSTMETAICON E LO PUSHO NEL SUO CONTAINER

    const elementImg = document.createElement('img');

    elementImg.className = 'profile-pic';

    elementPostMetaIcon.append(elementImg);

    // INSERISCO PROPRIETà OGGETTO DENTRO SRC IMG

    elementImg.src = element.author.image;

    // CREO ELEMENTO POSTMETADATA E LO PUSHO NEL SUO CONTAINER

    const elementPostMetaData = document.createElement('div');

    elementPostMetaData.className = 'post-meta__data';

    elementPostMeta.append(elementPostMetaData);

    // CREO ELEMENTO POSTMETA AUTHOR E LO PUSHO NEL SUO CONTAINER

    let elementPostMetaAuthor = document.createElement('div');

    elementPostMetaAuthor.className = 'post-meta__author';

    elementPostMetaData.append(elementPostMetaAuthor);

    elementPostMetaAuthor.innerHTML = element.author.name;





}













