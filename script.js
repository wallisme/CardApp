document.getElementById('drawButton').addEventListener('click', function () {
    drawCard();
});

function drawCard() {
    var cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4'];
    var randomIndex = Math.floor(Math.random() * cards.length);
    var currentCard = cards[randomIndex];

    animateCard(currentCard);
}

function animateCard(cardText) {
    var cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear previous content

    var cardElement = document.createElement('div');
    cardElement.innerHTML = '<div class="card">' +
                            '<div class="card-body">' +
                            '<h5 class="card-title">' + cardText + '</h5>' +
                            '</div>' +
                            '</div>';
    cardContainer.appendChild(cardElement);

    anime({
        targets: '.card',
        opacity: 1,
        translateY: 0,
        duration: 500,
        easing: 'easeInOutQuad'
    });
}
