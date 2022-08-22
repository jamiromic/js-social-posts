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


// SECONDO ARRAY IN CUI SALVEREMO GLI ID DEI LINK IN CUI ABBIAMO MESSO IL LIKE

const IdLiked = [];



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

    // INSERISCO PROPRIETA' OGGETTO DENTRO SRC IMG

    elementImg.src = element.author.image;

    // CREO ELEMENTO POSTMETADATA E LO PUSHO NEL SUO CONTAINER

    const elementPostMetaData = document.createElement('div');

    elementPostMetaData.className = 'post-meta__data';

    elementPostMeta.append(elementPostMetaData);

    // CREO ELEMENTO POSTMETA AUTHOR E LO PUSHO NEL SUO CONTAINER

    let elementPostMetaAuthor = document.createElement('div');

    elementPostMetaAuthor.className = 'post-meta__author';

    elementPostMetaData.append(elementPostMetaAuthor);

    // INSERISCO PROPRIETA' OGGETTO NOME AUTORE

    elementPostMetaAuthor.innerHTML = element.author.name;

    // CREO ELEMENTO POSTMETA TIME E LO PUSHO NEL SUO CONTAINER

    let elementPostMetaTime = document.createElement('div');

    elementPostMetaTime.className = 'post-meta__time';

    elementPostMetaData.append(elementPostMetaTime);

    // INSERISCO PROPRIETA' OGGETTO TIME

    elementPostMetaTime.innerHTML = element.created;

    // CREO ELEMENTO POST TEXT E LO PUSHO NEL SUO CONTAINER

    let elementPostText = document.createElement('div');

    elementPostText.className = 'post__text';

    elementPost.append(elementPostText);

    // INSERISCO PROPRIETA' OGGETTO TEXT

    elementPostText.innerHTML = element.content;



    // CREO ELEMENTO POST IMAGE E LO PUSHO NEL SUO CONTAINER

    let elementPostImage = document.createElement('div');

    elementPostImage.className = 'post__image';

    elementPost.append(elementPostImage);

   

    // CREO ELEMENTO POST IMAGE E LO PUSHO NEL SUO CONTAINER

    let elementPostImg = document.createElement('img');

    elementPostImage.append(elementPostImg);

    // INSERISCO PROPRIETA' OGGETTO TEXT

    elementPostImg.src = element.media;


    // CREO ELEMENTO POST FOOTER E LO PUSHO NEL SUO CONTAINER

    let elementPostFooter = document.createElement('div');

    elementPostFooter.className = 'post__footer';

    elementPost.append(elementPostFooter);


    // CREO ELEMENTO POST FOOTER LIKES E LO PUSHO NEL SUO CONTAINER

    let elementPostFooterlikes = document.createElement('div');

    elementPostFooterlikes.className = 'likes js-likes';

    elementPostFooter.append(elementPostFooterlikes);


    // CREO ELEMENTO POST FOOTER LIKES CTA E LO PUSHO NEL SUO CONTAINER

    let elementPostFooterlikesCta = document.createElement('div');

    elementPostFooterlikesCta.className = 'likes__cta';

    elementPostFooterlikes.append(elementPostFooterlikesCta);


    // CREO ELEMENTO POST A E LO PUSHO NEL SUO CONTAINER

    let elementPostA = document.createElement('a');

    elementPostA.className = 'like-button  js-like-button';

    elementPostA.href = '#';

    elementPostA.data = element.id;

    elementPostFooterlikesCta.append(elementPostA);

    

    // CREO ELEMENTO ICONA FOOTER LIKES E LO PUSHO NEL SUO CONTAINER

    let elementPostFooterIcon = document.createElement('i');

    elementPostFooterIcon.className = 'like-button__icon fas fa-thumbs-up';

    elementPostFooterIcon.ariaHidden = true;

    elementPostA.append(elementPostFooterIcon);


    // CREO ELEMENTO POST FOOTER LIKES SPAN E LO PUSHO NEL SUO CONTAINER

    let elementPostFooterlikesSpan = document.createElement('span');

    elementPostFooterlikesSpan.className = 'like-button__label';

    elementPostFooterlikesSpan.innerHTML = "Mi Piace";

    elementPostA.append(elementPostFooterlikesSpan);

    
    
    // CREO ELEMENTO POST LIKES COUNTER E LO PUSHO NEL SUO CONTAINER

    let elementPostLikesCounter = document.createElement('div');

    elementPostLikesCounter.className = 'likes__counter';

    elementPostFooterlikes.append(elementPostLikesCounter);

    

    // CREO ELEMENTO BOTTONE E LO PUSHO NEL SUO CONTENITORE

    let elementButtonLikes = document.createElement('b')

    elementButtonLikes.className = 'js-likes-counter'

    elementButtonLikes.id = element.id;

    elementPostLikesCounter.append(elementButtonLikes);

    elementButtonLikes.innerHTML = "Piace a " + element.likes + " persone";



    // INSERISCO EVENT LISTENER SUL BOTTONE - INSERISCO L'ARGOMENTO EVENT PER TOGLIERE DOPO PROPRIETA' DI DEFAULT AD A-LINK

    elementPostA.addEventListener('click', function(event) {

        
        // TOLGO PROPRIETA' DI DEFAULT A TAG A, PER EVITARE CHE AL CLICK DEL BUTTONS TORNI CON LA PAGINA SU
        event.preventDefault();

        // DICO AL BOTTONE DI CAMBIARE COLORE AL CLICK
        elementPostA.classList.add('like-button--liked');

        // CREO VARIABILE CON VALORE INCREMENTATO
        elementLikesIncr = element.likes+1;

        // INSERISCO NEL CONTATORE DI LIKES IL VALORE INCREMENTATO
        elementButtonLikes.innerHTML = "Piace a " + elementLikesIncr + " persone";

        
        // PUSHO IL VALORE DEGLI ID LIKED NELL'ARRAY
        IdLiked.push(element.id);
        
        // STAMPO L'ARRAY IN MODO DA VEDERNE L'INCREMENTO
        console.log(IdLiked);
    
    });




}







   

    












