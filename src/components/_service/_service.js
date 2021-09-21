/* serviceList */

const serviceData = [
  {
    id: "1",
    cardImg: "../../img/service/Delivery.svg",
    cardTitle: "Free Delevery",
    cardPrice: "",
    cardText: "It is a long established fact that a reader will be the service.",
    btnText: "",
  },
  {
    id: "2",
    cardImg: "../../img/service/Guarantee.svg",
    cardTitle: "100% Guarantee",
    cardPrice: "",
    cardText: "It is a long established fact that a reader will be the service.",
    btnText: "",
  },
  {
    id: "3",
    cardImg: "../../img/service/Quality.svg",
    cardTitle: "Best Quality",
    cardPrice: "",
    cardText: "It is a long established fact that a reader will be the service.",
    btnText: "",
  },
];

const serviceList = document.querySelector(".service__list");

if (serviceData.length > 0) {
  for (let i = 0; i < serviceData.length; i++) {
    let card = `<li class="service__item" data-cardId="${serviceData[i].id}">`
		card += `<div class="card">`
		if (serviceData[i].cardTitle) {
			card += `<img class="card__img" src="${serviceData[i].cardImg}" alt="${serviceData[i].cardTitle}" width="255" height="175" />`
		}
		if (serviceData[i].cardTitle) {
			card += `<h3 class="card__title">${serviceData[i].cardTitle}</h3>`
		}
		if (serviceData[i].cardPrice) {
			card += `<span class="card__price">${serviceData[i].cardPrice}</span>`
		}
		if (serviceData[i].cardText) {
			card += `<p class="card__text">${serviceData[i].cardText}</p>`
		}
		if (serviceData[i].btnText) {
			card += `
				<div class="card__button">
					<button class="btn" href="#" data-scrollTo="#" rel="noreferrer" type="button">${serviceData[i].btnText}</button>
				</div>
			`
		}
		card += `</div></li>`;

    serviceList.insertAdjacentHTML("beforeend", card);
  }
}
