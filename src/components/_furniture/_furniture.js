/* furnitureList */
@@include('./_furnitureData.js');

const furnitureList = document.querySelector(".furniture__list");

if (furnitureData.length > 0) {
  for (let i = 0; i < furnitureData.length; i++) {
    let card = `<li class="service__item" data-cardId="${furnitureData[i].id}">`
		card += `<div class="card">`
		if (furnitureData[i].cardTitle) {
			card += `<img class="card__img card__img--big" src="${furnitureData[i].cardImg}" alt="${furnitureData[i].cardTitle}" width="255" height="175" />`
		}
    card += `<div class="card__header">`
		if (furnitureData[i].cardTitle) {
			card += `<h3 class="card__title">${furnitureData[i].cardTitle}</h3>`
		}
		if (furnitureData[i].cardPrice) {
			card += `<span class="card__price">${furnitureData[i].cardPrice}</span>`
		}
    card += `</div>`
		if (furnitureData[i].cardText) {
			card += `<p class="card__text">${furnitureData[i].cardText}</p>`
		}
		if (furnitureData[i].btnText) {
			card += `
				<div class="card__button">
					<button class="btn" href="#" data-scrollTo="#" rel="noreferrer" type="button">${furnitureData[i].btnText}</button>
				</div>
			`
		}
		card += `</div></li>`;

    furnitureList.insertAdjacentHTML("beforeend", card);
  }
}
