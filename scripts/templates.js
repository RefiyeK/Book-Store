
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
                <button class="comment_button" onclick="openModal(${index})">Kommentare</button>
            </div>
        </div>
    `;
}


function getCommentHTML(indexA, indexB) {
    const comment = books[indexA].comments[indexB];
    return `
        <div class="comment_block">
            <span class="bold">${comment.name}</span>
            <span class="comment_text">${comment.comment}</span>
            <button class="${EDIT_BUTTON_CLASS}" onclick="editComment(${indexA}, ${indexB})">Bearbeiten</button>
        </div>
    `;
}


function generateModalComments(books, index) {
    if (books[index].comments.length === 0) {
        return '<div class="comment_block">Kein Kommentar</div>';
    }
    let commentsHTML = '';
    for (let j = 0; j < books[index].comments.length; j++) {
        commentsHTML += getCommentHTML(index, j);
    }
    return commentsHTML;
}


function addComment(index, name, comment, commentIndex = -1) {
    if (commentIndex === -1) {
        books[index].comments.push({ name, comment });
    } else {
        books[index].comments[commentIndex] = { name, comment };
    }
    modalCommentsElement.innerHTML = generateModalComments(books, index);
    saveBooksToLocalStorage();
}
