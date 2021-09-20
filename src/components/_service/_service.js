/* serviceList */

const serviceData = [
  {
    "id": "1",
    "cardImg": "../../img/service/Delivery.svg",
    "cardTitle": "Free Delevery",
		"cardPrice" : "",
    "cardText": "It is a long established fact that a reader will be the service.",
		"btnText" : ""
  },
  {
    "id": "2",
    "cardImg": "../../img/service/Guarantee.svg",
    "cardTitle": "100% Guarantee",
		"cardPrice" : "",
    "cardText": "It is a long established fact that a reader will be the service.",
		"btnText" : ""
  },
  {
    "id": "3",
    "cardImg": "../../img/service/Quality.svg",
    "cardTitle": "Best Quality",
		"cardPrice" : "",
    "cardText": "It is a long established fact that a reader will be the service.",
		"btnText" : "Button"
  },
];

const serviceList = document.querySelector(".service__list");

if (serviceData.length > 0) {
  for (let i = 0; i < serviceData.length; i++) {
    // let card = `
		// 	<li class="service__item" data-cardId="${serviceData[i].id}">
		// 		<div class="card">
		// 			<img class="card__img" src="${serviceData[i].cardImg}" alt="${serviceData[i].cardTitle}" width="255" height="175" />
		// 			<h3 class="card__title">${serviceData[i].cardTitle}</h3>
		// 			<span class="card__price">${serviceData[i].cardPrice}</span>
		// 			<p class="card__text">${serviceData[i].cardText}</p>
		// 			<div class="card__button">${serviceData[i].btnText}</div>
		// 		</div>
		// 	</li>
		// `;

		let card = `
			<li class="service__item" data-cardId="${serviceData[i].id}">
				@@include('../_card/_card.html', {
					"cardImg": "${serviceData[i].cardImg}",
					"cardTitle" : "${serviceData[i].cardTitle}",
					"cardPrice" : "${serviceData[i].cardPrice}",
					"cardText" : "${serviceData[i].cardText}",
					"btnText" : "${serviceData[i].btnText}"
				})
			</li>
		`;
	
    serviceList.insertAdjacentHTML("beforeend", card);

		console.log(card);
  }
}