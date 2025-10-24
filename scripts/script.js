
const CONTENT_ID = 'content';
const MODAL_ID = 'commentModal';
const MODAL_COMMENTS_ID = 'modalComments';
const CLOSE_BUTTON_CLASS = 'close_button';
const HEART_RED = './assets/icon/heart_rot.png';
const HEART_WHITE = './assets/icon/heart_white.png';
const STORAGE_KEY = 'buecherBurgBooks';
const COMMENT_FORM_ID = 'comment_form';
const COMMENT_NAME_ID = 'comment_name';
const COMMENT_TEXT_ID = 'comment_text';
const EDIT_BUTTON_CLASS = 'edit_button';

const contentElement = document.getElementById(CONTENT_ID);
const modalElement = document.getElementById(MODAL_ID);
const modalCommentsElement = document.getElementById(MODAL_COMMENTS_ID);
const commentForm = document.getElementById(COMMENT_FORM_ID);


function saveBooksToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}


function loadBooksFromLocalStorage() {
    const storedBooks = localStorage.getItem(STORAGE_KEY);
    if (storedBooks) {
        const parsedBooks = JSON.parse(storedBooks);
          if (Array.isArray(parsedBooks) && parsedBooks.length === books.length){
            for (let i = 0; i < books.length; i++) {
              books[i].liked = parsedBooks[i].liked;
              books[i].likes = parsedBooks[i].likes;
              books[i].comments = parsedBooks[i].comments;
         }
      }
  }
}


function clearContent() {
    if (contentElement) contentElement.innerHTML = '';
}


function renderBooks() {
    if (!contentElement) {
        console.error(`Element with ID ${CONTENT_ID} not found`);
        return;
    }
    clearContent();
    for (let i = 0; i < books.length; i++) {
        contentElement.innerHTML += getBookCardHTML(i);
    }
}


function editComment(bookIndex, commentIndex) {
    const comment = books[bookIndex].comments[commentIndex];
    const nameInput = document.getElementById(COMMENT_NAME_ID);
    const textInput = document.getElementById(COMMENT_TEXT_ID);
    const submitButtons = commentForm.getElementsByClassName('comment_button');
    if (submitButtons.length > 0) {
        const submitButton = submitButtons[0];
        nameInput.value = comment.name;
        textInput.value = comment.comment;
        submitButton.textContent = 'Bearbeitung speichern';
        commentForm.dataset.bookIndex = bookIndex;
        commentForm.dataset.commentIndex = commentIndex;
    }
}


function toggleLike(index) {
    books[index].liked = !books[index].liked;
    books[index].likes += books[index].liked ? 1 : -1;
}


function updateLikeCount(bookCardElement, likes) {
    const likeCountElements = bookCardElement.getElementsByClassName('like_count');
    if (likeCountElements.length > 0) {
        likeCountElements[0].textContent = likes;
    }
}


function updateLikeIcon(bookCardElement, liked) {
    const likeIconElements = bookCardElement.getElementsByClassName('like_icon');
    if (likeIconElements.length > 0) {
        likeIconElements[0].src = liked ? HEART_RED : HEART_WHITE;
    }
}


function bookLike(index) {
    const bookCardElement = document.getElementsByClassName('product_card')[index];
    if (bookCardElement) {
        toggleLike(index);
        updateLikeCount(bookCardElement, books[index].likes);
        updateLikeIcon(bookCardElement, books[index].liked);
        saveBooksToLocalStorage();
    }
}


function openModal(index) {
    if (!modalElement || !modalCommentsElement) {
        console.error(`Modal or comments element not found`);
        return;
    }
    modalCommentsElement.innerHTML = generateModalComments(books, index);
    modalElement.style.display = 'flex';
    commentForm.reset();
    const commentButtons = commentForm.getElementsByClassName('comment_button');
    if (commentButtons.length > 0) {
        commentButtons[0].textContent = 'Kommentar hinzufügen';
    }
    commentForm.dataset.bookIndex = index;
    delete commentForm.dataset.commentIndex;
}


function closeModal() {
    if (modalElement) {
        modalElement.style.display = 'none';
    }
}


function handleModalOutsideClick(event) {
    if (event.target === modalElement) {
        closeModal();
    }
}


function initializeCloseButton() {
    const closeButtons = document.getElementsByClassName(CLOSE_BUTTON_CLASS);
    if (closeButtons.length > 0) {
        closeButtons[0].addEventListener('click', closeModal);
    }
}


function initializeCommentForm() {
    if (commentForm) {
        commentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById(COMMENT_NAME_ID).value;
            const comment = document.getElementById(COMMENT_TEXT_ID).value;
            const bookIndex = parseInt(commentForm.dataset.bookIndex);
            const commentIndex = commentForm.dataset.commentIndex ? parseInt(commentForm.dataset.commentIndex) : -1;
            if (name && comment) {
                addComment(bookIndex, name, comment, commentIndex);
                commentForm.reset();
                const commentButtons = commentForm.getElementsByClassName('comment_button');
                if (commentButtons.length > 0) {
                    commentButtons[0].textContent = 'Kommentar hinzufügen';
                }
                commentForm.querySelector('.comment_button').textContent = 'Kommentar hinzufügen';
                delete commentForm.dataset.commentIndex;
            }
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadBooksFromLocalStorage();
    initializeCloseButton();
    initializeCommentForm();
    window.addEventListener('click', handleModalOutsideClick);
    renderBooks();
});