let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": 14.50,
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": 22.95,
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": 18.00,
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": 16.75,
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": 12.30,
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": 21.00,
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": 17.50,
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": 19.99,
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]


const CONTENT_ID = 'content';
const MODAL_ID = 'commentModal';
const MODAL_COMMENTS_ID = 'modalComments';
const CLOSE_BUTTON_CLASS = 'close_button';
const HEART_RED = './assets/icon/heart_rot.png';
const HEART_WHITE = './assets/icon/heart_white.png';
const STORAGE_KEY = 'buecherBurgBooks'; //localStorage anahtari
const COMMENT_FORM_ID = 'comment_form'; //Form ID si
const COMMENT_NAME_ID = 'comment_name'; //Isim Input ID si
const COMMENT_TEXT_ID = 'comment_text'; //Yorum Input ID si
const EDIT_BUTTON_CLASS = 'edit_button'; //Düzenleme butonu

function saveBooksToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

}

// Kitapları LocalStorage’dan yükler
function loadBooksFromLocalStorage() {
    //LocalStorage’dan veriyi okuyup books dizisini güncelliyor.
    const storedBooks = localStorage.getItem(STORAGE_KEY);
    if (storedBooks) {
        const parsedBooks = JSON.parse(storedBooks);
        for (let i = 0; i < books.length; i++) {
            books[i].liked = parsedBooks[i].liked;
            books[i].likes = parsedBooks[i].likes;
            books[i].comments = parsedBooks[i].comments; //Yeni yorumlari ekle
        }
    }
}



//icerigi temizliyor. Arka Plan: İçeriği sıfırlamak için, tekrar render etmeden önce mevcut kartlar temizleniyor.
function clearContent(contentElement) {
    contentElement.innerHTML = '';
}

//Kitap kartlarinin HTML`ini olusturma.
  function getBookCardHTML(index) {
    const book = books[index];
    const likeIcon = book.liked ? HEART_RED : HEART_WHITE;
    const price = book.price.toString().replace(".", ",");
    return `
        <div class="product_card">
            <img class="like_icon" src="${likeIcon}" alt="Like" onclick="bookLike(${index})">
            <div class="book_container">
                <img class="book" src="./assets/img/book.png" alt="${book.name}">
            </div>
            <h2>${book.name}</h2>
            <div>
                <span class="bold">Preis: </span>${price} €<br>
                <span class="bold">Schriftsteller: </span>${book.author}<br>
                <span class="bold">Veröffentlichungsjahr: </span>${book.publishedYear}<br>
                <span class="bold">Genre: </span>${book.genre}<br>
                <span class="bold">Likes: </span><span class="like_count">${book.likes}</span><br>
                <button class="comment_button" onclick="openModal(${index})">Kommentare (${book.comments.length})</button>
            </div>
        </div>
    `;
}



// Tüm kitap kartları render etme yeri.
function renderBooks() {
    const contentElement = document.getElementById(CONTENT_ID);
    if (!contentElement) {
        console.error(`Element with ID ${CONTENT_ID} not found`);
        return;
    }
    clearContent(contentElement);
    for (let i = 0; i < books.length; i++) {
        contentElement.innerHTML += getBookCardHTML(i);
    }
}



// Yorumun HTML’ini oluşturma yeri.
function getCommentHTML(indexA, indexB) {
    const comment = books[indexA].comments[indexB];
    return `
        <div class="comment_block">
            <span class="bold">${comment.name}</span>
            <button class="${EDIT_BUTTON_CLASS}" onclick="editComment(${indexA}, ${indexB})">Bearbeiten</button>
            <span class="comment_text">${comment.comment}</span>
        </div>
    `;
}



function generateModalComments(index) { // Modal yorum içeriğini oluşturur
    if (books[index].comments.length === 0) {
        return '<div class="comment_block">Kein Kommentar</div>';
    }
    let commentsHTML = '';
    for (let j = 0; j < books[index].comments.length; j++) {
        commentsHTML += getCommentHTML(index, j);
    }
    return commentsHTML;
}


function addComment(index, name, comment, commentIndex= -1) {
    //Yeni yorumu comments array’ine ekler, modal’ı ve LocalStorage’ı günceller
    const modalCommentsElement = document.getElementById(MODAL_COMMENTS_ID);
    if (commentIndex ===-1){
      books[index].comments.push({name, comment});//yeni yorum ekle
    }else {
      books[index].comments[commentIndex] = {name, comment};//Mevcut yorumu güncelle
    }
    modalCommentsElement.innerHTML = generateModalComments(index);
    saveBooksToLocalStorage(); // Yorumları kaydet
    // Karttaki yorum sayısını güncelle
    const bookCardElement = document.getElementsByClassName('product_card')[index];
    bookCardElement.querySelector('.comment_button').textContent = `Kommentare (${books[index].comments.length})`;
}

function editComment(bookIndex, commentIndex) {
    const comment = books[bookIndex].comments[commentIndex];
    const commentForm = document.getElementById(COMMENT_FORM_ID);
    const nameInput = document.getElementById(COMMENT_NAME_ID);
    const textInput = document.getElementById(COMMENT_TEXT_ID);
    const submitButton = commentForm.querySelector('.comment_button');
    // Formu doldur
    nameInput.value = comment.name;
    textInput.value = comment.comment;
    // Buton metnini değiştir
    submitButton.textContent = 'Düzeltmeyi Kaydet';
    // Düzenleme modunu sakla
    commentForm.dataset.bookIndex = bookIndex;
    commentForm.dataset.commentIndex = commentIndex;
}



// Beğeni durumunu değiştiren yer.
function toggleLike(index) {
    books[index].liked = !books[index].liked;
    books[index].likes += books[index].liked ? 1 : -1;
}

// Beğeni sayısını güncelleyen alan.
function updateLikeCount(bookCardElement, likes) {
    const likeCountElement = bookCardElement.querySelector('.like_count');
    if (likeCountElement) {
        likeCountElement.textContent = likes;
    }
}

// Kalp ikonunu güncelleyen alan
function updateLikeIcon(bookCardElement, liked) {
    const likeIconElement = bookCardElement.querySelector('.like_icon');
    if (likeIconElement) {
        likeIconElement.src = liked ? HEART_RED : HEART_WHITE;
    }
}


// Kalp ikonuna animasyon ekleyen alan. Kalp büyüyor.
function animateLikeIcon(bookCardElement) {
    const likeIconElement = bookCardElement.querySelector('.like_icon');
    if (likeIconElement) {
        likeIconElement.style.transition = 'transform 0.2s';
        likeIconElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            likeIconElement.style.transform = 'scale(1)';
        }, 200);
    }
}


// Beğeni işlemini yöneten alan.
function bookLike(index) {
    const bookCardElement = document.getElementsByClassName('product_card')[index];
    if (!bookCardElement) {
        console.error(`Book card for index ${index} not found`);
        return;
    }
    toggleLike(index);
    updateLikeCount(bookCardElement, books[index].likes);
    updateLikeIcon(bookCardElement, books[index].liked);
    animateLikeIcon(bookCardElement);
}

// Modal’ı açilmasi
function openModal(index) {
    const modalElement = document.getElementById(MODAL_ID);
    const modalCommentsElement = document.getElementById(MODAL_COMMENTS_ID);
    if (!modalElement || !modalCommentsElement) {
        console.error(`Modal or comments element not found`);
        return;
    }
    modalCommentsElement.innerHTML = generateModalComments(index);
    modalElement.style.display = 'flex';
    const commentForm = document.getElementById(COMMENT_FORM_ID); //Formu sifirla ve indexi sakla
    const submitButton = commentForm.querySelector('.comment_button');
    commentForm.reset(); //Inputlari temizle ve yeni yorum moduna gec
    submitButton.textContent = 'Kommentar hinzufügen';
    commentForm.dataset.bookIndex = index;//Hangi kitaba yorum eklenecegini sakla
    delete commentForm.dataset.commentIndex; //Düzenleme modunu sifirla
}


// Modal’ı kapatılmasi
function closeModal() {
    const modalElement = document.getElementById(MODAL_ID);
    if (modalElement) {
        modalElement.style.display = 'none';
    }
}

// Modal dışı tıklamaların yönetildigi yer
function handleModalOutsideClick(event) {
    const modalElement = document.getElementById(MODAL_ID);
    if (event.target === modalElement) {
        closeModal();
    }
}

// Kapatma butonunu başlatan yer
function initializeCloseButton() {
    const closeButton = document.querySelector(`.${CLOSE_BUTTON_CLASS}`);
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
}


// Form gönderimini başlatır
function initializeCommentForm() {
    const commentForm = document.getElementById(COMMENT_FORM_ID);
    if (commentForm) {
        commentForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Formun sayfayı yenilemesini engelle
            const name = document.getElementById(COMMENT_NAME_ID).value;
            const comment = document.getElementById(COMMENT_TEXT_ID).value;
            const bookIndex = parseInt(commentForm.dataset.bookIndex);
            const commentIndex = commentForm.dataset.commentIndex ? parseInt(commentForm.dataset.commentIndex) : -1;
            if (name && comment) { // Input’lar boş değilse
                addComment(bookIndex, name, comment, commentIndex);
                commentForm.reset(); // Formu sıfırla
                commentForm.querySelector('.comment_button').textContent = 'Kommentar hinzufügen';
                delete commentForm.dataset.commentIndex; // Düzenleme modunu sıfırla
            }
        });
    }
}

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', () => {
    loadBooksFromLocalStorage();
    initializeCloseButton();
    initializeCommentForm(); // Yeni: Formu başlat
    window.addEventListener('click', handleModalOutsideClick);
    renderBooks();
});