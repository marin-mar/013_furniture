"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* fonts from folder to scss */
function fontsStyle(params) {
  var file_content = fs.readFileSync(source_folder + "/scss/_fonts.scss");

  if (file_content == "") {
    fs.writeFile(source_folder + "/scss/_fonts.scss", "", cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        var c_fontname;

        for (var i = 0; i < items.length; i++) {
          var fontname = items[i].split(".");
          fontname = fontname[0];

          if (c_fontname != fontname) {
            fs.appendFile(source_folder + "/scss/_fonts.scss", '@include font-face("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
          }

          c_fontname = fontname;
        }
      }
    });
  }
}

;
/* burger menu */

var menuIcon = document.querySelector(".menu__icon");
var menuBody = document.querySelector(".menu__body");

if (menuIcon) {
  menuIcon.addEventListener("click", function () {
    document.body.classList.toggle("locked");
    menuIcon.classList.toggle("menu__icon--active");
    menuBody.classList.toggle("menu__body--active");
  });
}
/* smooth scroll */


var menulinks = document.querySelectorAll("[data-scrollTo]");

if (menulinks.length > 0) {
  menulinks.forEach(function (menuLink) {
    menuLink.addEventListener("click", function (e) {
      var scrollTo = e.target.dataset.scrollto;
      var scrollToBlock = document.querySelector(scrollTo);
      var scrollToBlockValue = scrollToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

      if (scrollTo && scrollToBlock) {
        e.preventDefault();
        window.scrollTo({
          top: scrollToBlockValue,
          behavior: "smooth"
        });
      }

      if (menuIcon.classList.contains("menu__icon--active")) {
        document.body.classList.remove("locked");
        menuIcon.classList.remove("menu__icon--active");
        menuBody.classList.remove("menu__body--active");
      }
    });
  });
}
/* sticky header on scroll*/


var header = document.querySelector(".header");
var sticky = header.offsetTop;

window.onscroll = function () {
  if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
};

;
/* serviceList */

var serviceData = [{
  id: "1",
  cardImg: "../../img/service/Delivery.svg",
  cardTitle: "Free Delevery",
  cardPrice: "",
  cardText: "It is a long established fact that a reader will be the service.",
  btnText: ""
}, {
  id: "2",
  cardImg: "../../img/service/Guarantee.svg",
  cardTitle: "100% Guarantee",
  cardPrice: "",
  cardText: "It is a long established fact that a reader will be the service.",
  btnText: ""
}, {
  id: "3",
  cardImg: "../../img/service/Quality.svg",
  cardTitle: "Best Quality",
  cardPrice: "",
  cardText: "It is a long established fact that a reader will be the service.",
  btnText: ""
}];
var serviceList = document.querySelector(".service__list");

if (serviceData.length > 0) {
  for (var i = 0; i < serviceData.length; i++) {
    var card = "<li class=\"service__item\" data-cardId=\"".concat(serviceData[i].id, "\">");
    card += "<div class=\"card\">";

    if (serviceData[i].cardTitle) {
      card += "<img class=\"card__img\" src=\"".concat(serviceData[i].cardImg, "\" alt=\"").concat(serviceData[i].cardTitle, "\" width=\"255\" height=\"175\" />");
    }

    if (serviceData[i].cardTitle) {
      card += "<h3 class=\"card__title\">".concat(serviceData[i].cardTitle, "</h3>");
    }

    if (serviceData[i].cardPrice) {
      card += "<span class=\"card__price\">".concat(serviceData[i].cardPrice, "</span>");
    }

    if (serviceData[i].cardText) {
      card += "<p class=\"card__text\">".concat(serviceData[i].cardText, "</p>");
    }

    if (serviceData[i].btnText) {
      card += "\n\t\t\t\t<div class=\"card__button\">\n\t\t\t\t\t<button class=\"btn\" href=\"#\" data-scrollTo=\"#\" rel=\"noreferrer\" type=\"button\">".concat(serviceData[i].btnText, "</button>\n\t\t\t\t</div>\n\t\t\t");
    }

    card += "</div></li>";
    serviceList.insertAdjacentHTML("beforeend", card);
  }
}

;
/* furnitureList */

/* furnitureData */

var furnitureData = [{
  id: "1",
  cardImg: "../../img/furniture/furniture__001.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}, {
  id: "2",
  cardImg: "../../img/furniture/furniture__002.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}, {
  id: "3",
  cardImg: "../../img/furniture/furniture__003.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}, {
  id: "4",
  cardImg: "../../img/furniture/furniture__004.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}, {
  id: "5",
  cardImg: "../../img/furniture/furniture__005.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}, {
  id: "6",
  cardImg: "../../img/furniture/furniture__006.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}, {
  id: "7",
  cardImg: "../../img/furniture/furniture__007.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}, {
  id: "8",
  cardImg: "../../img/furniture/furniture__008.jpg",
  cardTitle: "Furniture Name",
  cardPrice: "$ 250",
  cardText: "It is a long estiabs lished fact that a reader will be the service",
  btnText: "Order Now"
}];
;
var furnitureList = document.querySelector(".furniture__list");

if (furnitureData.length > 0) {
  for (var _i = 0; _i < furnitureData.length; _i++) {
    var _card = "<li class=\"service__item\" data-cardId=\"".concat(furnitureData[_i].id, "\">");

    _card += "<div class=\"card\">";

    if (furnitureData[_i].cardTitle) {
      _card += "<img class=\"card__img card__img--big\" src=\"".concat(furnitureData[_i].cardImg, "\" alt=\"").concat(furnitureData[_i].cardTitle, "\" width=\"255\" height=\"175\" />");
    }

    _card += "<div class=\"card__header\">";

    if (furnitureData[_i].cardTitle) {
      _card += "<h3 class=\"card__title\">".concat(furnitureData[_i].cardTitle, "</h3>");
    }

    if (furnitureData[_i].cardPrice) {
      _card += "<span class=\"card__price\">".concat(furnitureData[_i].cardPrice, "</span>");
    }

    _card += "</div>";

    if (furnitureData[_i].cardText) {
      _card += "<p class=\"card__text\">".concat(furnitureData[_i].cardText, "</p>");
    }

    if (furnitureData[_i].btnText) {
      _card += "\n\t\t\t\t<div class=\"card__button\">\n\t\t\t\t\t<button class=\"btn\" href=\"#\" data-scrollTo=\"#\" rel=\"noreferrer\" type=\"button\">".concat(furnitureData[_i].btnText, "</button>\n\t\t\t\t</div>\n\t\t\t");
    }

    _card += "</div></li>";
    furnitureList.insertAdjacentHTML("beforeend", _card);
  }
}

;
/* popup 404 for nonexistent links */

var nonexistentLinks = document.querySelectorAll('[href="#"]');
var nonexistentBtns = document.querySelectorAll('.btn[data-scrollTo="#"]');
var furnitureButtons = document.querySelectorAll(".furniture__button");
var furnitureFilterBtns = document.querySelectorAll(".furniture__filter-btn");
var clientsReviewBtns = document.querySelectorAll(".clients-review__btn");
var nonexistentArray = [].concat(_toConsumableArray(nonexistentLinks), _toConsumableArray(nonexistentBtns), _toConsumableArray(furnitureButtons), _toConsumableArray(furnitureFilterBtns), _toConsumableArray(clientsReviewBtns));
var popupBg = document.querySelector(".popup404");
var popup = document.querySelector(".popup404__body");
var closePopupButton = document.querySelector(".popup404__close");
nonexistentArray.forEach(function (nonexistentLink) {
  nonexistentLink.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.add("locked");
    popupBg.classList.add("popup404--active");
    popup.classList.add("popup404__body--active");
  });
});
closePopupButton.addEventListener("click", function () {
  document.body.classList.remove("locked");
  popupBg.classList.remove("popup404--active");
  popup.classList.remove("popup404__body--active");
});
document.addEventListener("click", function (e) {
  if (e.target === popupBg) {
    document.body.classList.remove("locked");
    popupBg.classList.remove("popup404--active");
    popup.classList.remove("popup404__body--active");
  }
});
;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZm9udHNTdHlsZSIsInBhcmFtcyIsImZpbGVfY29udGVudCIsImZzIiwicmVhZEZpbGVTeW5jIiwic291cmNlX2ZvbGRlciIsIndyaXRlRmlsZSIsImNiIiwicmVhZGRpciIsInBhdGgiLCJidWlsZCIsImZvbnRzIiwiZXJyIiwiaXRlbXMiLCJjX2ZvbnRuYW1lIiwiaSIsImxlbmd0aCIsImZvbnRuYW1lIiwic3BsaXQiLCJhcHBlbmRGaWxlIiwibWVudUljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51Qm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwibWVudWxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJtZW51TGluayIsImUiLCJzY3JvbGxUbyIsInRhcmdldCIsImRhdGFzZXQiLCJzY3JvbGx0byIsInNjcm9sbFRvQmxvY2siLCJzY3JvbGxUb0Jsb2NrVmFsdWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJwYWdlWU9mZnNldCIsIm9mZnNldEhlaWdodCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwiYmVoYXZpb3IiLCJjb250YWlucyIsInJlbW92ZSIsImhlYWRlciIsInN0aWNreSIsIm9mZnNldFRvcCIsIm9uc2Nyb2xsIiwiYWRkIiwic2VydmljZURhdGEiLCJpZCIsImNhcmRJbWciLCJjYXJkVGl0bGUiLCJjYXJkUHJpY2UiLCJjYXJkVGV4dCIsImJ0blRleHQiLCJzZXJ2aWNlTGlzdCIsImNhcmQiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJmdXJuaXR1cmVEYXRhIiwiZnVybml0dXJlTGlzdCIsIm5vbmV4aXN0ZW50TGlua3MiLCJub25leGlzdGVudEJ0bnMiLCJmdXJuaXR1cmVCdXR0b25zIiwiZnVybml0dXJlRmlsdGVyQnRucyIsImNsaWVudHNSZXZpZXdCdG5zIiwibm9uZXhpc3RlbnRBcnJheSIsInBv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QUssQ0FBQzlDLFNBQU4sQ0FBZ0JxQixNQUFoQixDQUF1Qix3QkFBdkI7QUFDRDtBQUNGLENBTkQ7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGZvbnRzIGZyb20gZm9sZGVyIHRvIHNjc3MgKi9cclxuXHJcbmZ1bmN0aW9uIGZvbnRzU3R5bGUocGFyYW1zKSB7XHJcbiAgbGV0IGZpbGVfY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhzb3VyY2VfZm9sZGVyICsgXCIvc2Nzcy9fZm9udHMuc2Nzc1wiKTtcclxuICBpZiAoZmlsZV9jb250ZW50ID09IFwiXCIpIHtcclxuICAgIGZzLndyaXRlRmlsZShzb3VyY2VfZm9sZGVyICsgXCIvc2Nzcy9fZm9udHMuc2Nzc1wiLCBcIlwiLCBjYik7XHJcbiAgICByZXR1cm4gZnMucmVhZGRpcihwYXRoLmJ1aWxkLmZvbnRzLCBmdW5jdGlvbiAoZXJyLCBpdGVtcykge1xyXG4gICAgICBpZiAoaXRlbXMpIHtcclxuICAgICAgICBsZXQgY19mb250bmFtZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBsZXQgZm9udG5hbWUgPSBpdGVtc1tpXS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICBmb250bmFtZSA9IGZvbnRuYW1lWzBdO1xyXG4gICAgICAgICAgaWYgKGNfZm9udG5hbWUgIT0gZm9udG5hbWUpIHtcclxuICAgICAgICAgICAgZnMuYXBwZW5kRmlsZShcclxuICAgICAgICAgICAgICBzb3VyY2VfZm9sZGVyICsgXCIvc2Nzcy9fZm9udHMuc2Nzc1wiLFxyXG4gICAgICAgICAgICAgICdAaW5jbHVkZSBmb250LWZhY2UoXCInICsgZm9udG5hbWUgKyAnXCIsIFwiJyArIGZvbnRuYW1lICsgJ1wiLCBcIjQwMFwiLCBcIm5vcm1hbFwiKTtcXHJcXG4nLFxyXG4gICAgICAgICAgICAgIGNiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjX2ZvbnRuYW1lID0gZm9udG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuO1xyXG4vKiBidXJnZXIgbWVudSAqL1xyXG5cclxuY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX2ljb25cIik7XHJcbmNvbnN0IG1lbnVCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19ib2R5XCIpO1xyXG5cclxuaWYgKG1lbnVJY29uKSB7XHJcbiAgbWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImxvY2tlZFwiKTtcclxuICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51X19pY29uLS1hY3RpdmVcIik7XHJcbiAgICBtZW51Qm9keS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9fYm9keS0tYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKiBzbW9vdGggc2Nyb2xsICovXHJcbmNvbnN0IG1lbnVsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1zY3JvbGxUb11cIik7XHJcblxyXG5pZiAobWVudWxpbmtzLmxlbmd0aCA+IDApIHtcclxuICBtZW51bGlua3MuZm9yRWFjaCgobWVudUxpbmspID0+IHtcclxuICAgIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zdCBzY3JvbGxUbyA9IGUudGFyZ2V0LmRhdGFzZXQuc2Nyb2xsdG87XHJcbiAgICAgIGNvbnN0IHNjcm9sbFRvQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNjcm9sbFRvKTtcclxuICAgICAgY29uc3Qgc2Nyb2xsVG9CbG9ja1ZhbHVlID0gc2Nyb2xsVG9CbG9jay5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyBwYWdlWU9mZnNldCAtIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIGlmIChzY3JvbGxUbyAmJiBzY3JvbGxUb0Jsb2NrKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgdG9wOiBzY3JvbGxUb0Jsb2NrVmFsdWUsXHJcbiAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG1lbnVJY29uLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVfX2ljb24tLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tlZFwiKTtcclxuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9faWNvbi0tYWN0aXZlXCIpO1xyXG4gICAgICAgIG1lbnVCb2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X19ib2R5LS1hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKiBzdGlja3kgaGVhZGVyIG9uIHNjcm9sbCovXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG5jb25zdCBzdGlja3kgPSBoZWFkZXIub2Zmc2V0VG9wO1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBzdGlja3kpIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLS1zdGlja3lcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLS1zdGlja3lcIik7XHJcbiAgfVxyXG59O1xyXG47XHJcbi8qIHNlcnZpY2VMaXN0ICovXHJcblxyXG5jb25zdCBzZXJ2aWNlRGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogXCIxXCIsXHJcbiAgICBjYXJkSW1nOiBcIi4uLy4uL2ltZy9zZXJ2aWNlL0RlbGl2ZXJ5LnN2Z1wiLFxyXG4gICAgY2FyZFRpdGxlOiBcIkZyZWUgRGVsZXZlcnlcIixcclxuICAgIGNhcmRQcmljZTogXCJcIixcclxuICAgIGNhcmRUZXh0OiBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSB0aGUgc2VydmljZS5cIixcclxuICAgIGJ0blRleHQ6IFwiXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBjYXJkSW1nOiBcIi4uLy4uL2ltZy9zZXJ2aWNlL0d1YXJhbnRlZS5zdmdcIixcclxuICAgIGNhcmRUaXRsZTogXCIxMDAlIEd1YXJhbnRlZVwiLFxyXG4gICAgY2FyZFByaWNlOiBcIlwiLFxyXG4gICAgY2FyZFRleHQ6IFwiSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIHRoZSBzZXJ2aWNlLlwiLFxyXG4gICAgYnRuVGV4dDogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjNcIixcclxuICAgIGNhcmRJbWc6IFwiLi4vLi4vaW1nL3NlcnZpY2UvUXVhbGl0eS5zdmdcIixcclxuICAgIGNhcmRUaXRsZTogXCJCZXN0IFF1YWxpdHlcIixcclxuICAgIGNhcmRQcmljZTogXCJcIixcclxuICAgIGNhcmRUZXh0OiBcIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSB0aGUgc2VydmljZS5cIixcclxuICAgIGJ0blRleHQ6IFwiXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNlcnZpY2VMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXJ2aWNlX19saXN0XCIpO1xyXG5cclxuaWYgKHNlcnZpY2VEYXRhLmxlbmd0aCA+IDApIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcnZpY2VEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgY2FyZCA9IGA8bGkgY2xhc3M9XCJzZXJ2aWNlX19pdGVtXCIgZGF0YS1jYXJkSWQ9XCIke3NlcnZpY2VEYXRhW2ldLmlkfVwiPmBcclxuXHRcdGNhcmQgKz0gYDxkaXYgY2xhc3M9XCJjYXJkXCI+YFxyXG5cdFx0aWYgKHNlcnZpY2VEYXRhW2ldLmNhcmRUaXRsZSkge1xyXG5cdFx0XHRjYXJkICs9IGA8aW1nIGNsYXNzPVwiY2FyZF9faW1nXCIgc3JjPVwiJHtzZXJ2aWNlRGF0YVtpXS5jYXJkSW1nfVwiIGFsdD1cIiR7c2VydmljZURhdGFbaV0uY2FyZFRpdGxlfVwiIHdpZHRoPVwiMjU1XCIgaGVpZ2h0PVwiMTc1XCIgLz5gXHJcblx0XHR9XHJcblx0XHRpZiAoc2VydmljZURhdGFbaV0uY2FyZFRpdGxlKSB7XHJcblx0XHRcdGNhcmQgKz0gYDxoMyBjbGFzcz1cImNhcmRfX3RpdGxlXCI+JHtzZXJ2aWNlRGF0YVtpXS5jYXJkVGl0bGV9PC9oMz5gXHJcblx0XHR9XHJcblx0XHRpZiAoc2VydmljZURhdGFbaV0uY2FyZFByaWNlKSB7XHJcblx0XHRcdGNhcmQgKz0gYDxzcGFuIGNsYXNzPVwiY2FyZF9fcHJpY2VcIj4ke3NlcnZpY2VEYXRhW2ldLmNhcmRQcmljZX08L3NwYW4+YFxyXG5cdFx0fVxyXG5cdFx0aWYgKHNlcnZpY2VEYXRhW2ldLmNhcmRUZXh0KSB7XHJcblx0XHRcdGNhcmQgKz0gYDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPiR7c2VydmljZURhdGFbaV0uY2FyZFRleHR9PC9wPmBcclxuXHRcdH1cclxuXHRcdGlmIChzZXJ2aWNlRGF0YVtpXS5idG5UZXh0KSB7XHJcblx0XHRcdGNhcmQgKz0gYFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19idXR0b25cIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG5cIiBocmVmPVwiI1wiIGRhdGEtc2Nyb2xsVG89XCIjXCIgcmVsPVwibm9yZWZlcnJlclwiIHR5cGU9XCJidXR0b25cIj4ke3NlcnZpY2VEYXRhW2ldLmJ0blRleHR9PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdGBcclxuXHRcdH1cclxuXHRcdGNhcmQgKz0gYDwvZGl2PjwvbGk+YDtcclxuXHJcbiAgICBzZXJ2aWNlTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY2FyZCk7XHJcbiAgfVxyXG59XHJcbjtcclxuLyogZnVybml0dXJlTGlzdCAqL1xyXG4vKiBmdXJuaXR1cmVEYXRhICovXHJcblxyXG5jb25zdCBmdXJuaXR1cmVEYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIjFcIixcclxuICAgIGNhcmRJbWc6IFwiLi4vLi4vaW1nL2Z1cm5pdHVyZS9mdXJuaXR1cmVfXzAwMS5qcGdcIixcclxuICAgIGNhcmRUaXRsZTogXCJGdXJuaXR1cmUgTmFtZVwiLFxyXG4gICAgY2FyZFByaWNlOiBcIiQgMjUwXCIsXHJcbiAgICBjYXJkVGV4dDogXCJJdCBpcyBhIGxvbmcgZXN0aWFicyBsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgdGhlIHNlcnZpY2VcIixcclxuICAgIGJ0blRleHQ6IFwiT3JkZXIgTm93XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCIyXCIsXHJcbiAgICBjYXJkSW1nOiBcIi4uLy4uL2ltZy9mdXJuaXR1cmUvZnVybml0dXJlX18wMDIuanBnXCIsXHJcbiAgICBjYXJkVGl0bGU6IFwiRnVybml0dXJlIE5hbWVcIixcclxuXHJcbiAgICBjYXJkUHJpY2U6IFwiJCAyNTBcIixcclxuICAgIGNhcmRUZXh0OiBcIkl0IGlzIGEgbG9uZyBlc3RpYWJzIGxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSB0aGUgc2VydmljZVwiLFxyXG4gICAgYnRuVGV4dDogXCJPcmRlciBOb3dcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIjNcIixcclxuICAgIGNhcmRJbWc6IFwiLi4vLi4vaW1nL2Z1cm5pdHVyZS9mdXJuaXR1cmVfXzAwMy5qcGdcIixcclxuICAgIGNhcmRUaXRsZTogXCJGdXJuaXR1cmUgTmFtZVwiLFxyXG4gICAgY2FyZFByaWNlOiBcIiQgMjUwXCIsXHJcbiAgICBjYXJkVGV4dDogXCJJdCBpcyBhIGxvbmcgZXN0aWFicyBsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgdGhlIHNlcnZpY2VcIixcclxuICAgIGJ0blRleHQ6IFwiT3JkZXIgTm93XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI0XCIsXHJcbiAgICBjYXJkSW1nOiBcIi4uLy4uL2ltZy9mdXJuaXR1cmUvZnVybml0dXJlX18wMDQuanBnXCIsXHJcbiAgICBjYXJkVGl0bGU6IFwiRnVybml0dXJlIE5hbWVcIixcclxuICAgIGNhcmRQcmljZTogXCIkIDI1MFwiLFxyXG4gICAgY2FyZFRleHQ6IFwiSXQgaXMgYSBsb25nIGVzdGlhYnMgbGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIHRoZSBzZXJ2aWNlXCIsXHJcbiAgICBidG5UZXh0OiBcIk9yZGVyIE5vd1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiNVwiLFxyXG4gICAgY2FyZEltZzogXCIuLi8uLi9pbWcvZnVybml0dXJlL2Z1cm5pdHVyZV9fMDA1LmpwZ1wiLFxyXG4gICAgY2FyZFRpdGxlOiBcIkZ1cm5pdHVyZSBOYW1lXCIsXHJcblxyXG4gICAgY2FyZFByaWNlOiBcIiQgMjUwXCIsXHJcbiAgICBjYXJkVGV4dDogXCJJdCBpcyBhIGxvbmcgZXN0aWFicyBsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgdGhlIHNlcnZpY2VcIixcclxuICAgIGJ0blRleHQ6IFwiT3JkZXIgTm93XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI2XCIsXHJcbiAgICBjYXJkSW1nOiBcIi4uLy4uL2ltZy9mdXJuaXR1cmUvZnVybml0dXJlX18wMDYuanBnXCIsXHJcbiAgICBjYXJkVGl0bGU6IFwiRnVybml0dXJlIE5hbWVcIixcclxuICAgIGNhcmRQcmljZTogXCIkIDI1MFwiLFxyXG4gICAgY2FyZFRleHQ6IFwiSXQgaXMgYSBsb25nIGVzdGlhYnMgbGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIHRoZSBzZXJ2aWNlXCIsXHJcbiAgICBidG5UZXh0OiBcIk9yZGVyIE5vd1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwiN1wiLFxyXG4gICAgY2FyZEltZzogXCIuLi8uLi9pbWcvZnVybml0dXJlL2Z1cm5pdHVyZV9fMDA3LmpwZ1wiLFxyXG4gICAgY2FyZFRpdGxlOiBcIkZ1cm5pdHVyZSBOYW1lXCIsXHJcblxyXG4gICAgY2FyZFByaWNlOiBcIiQgMjUwXCIsXHJcbiAgICBjYXJkVGV4dDogXCJJdCBpcyBhIGxvbmcgZXN0aWFicyBsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgdGhlIHNlcnZpY2VcIixcclxuICAgIGJ0blRleHQ6IFwiT3JkZXIgTm93XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCI4XCIsXHJcbiAgICBjYXJkSW1nOiBcIi4uLy4uL2ltZy9mdXJuaXR1cmUvZnVybml0dXJlX18wMDguanBnXCIsXHJcbiAgICBjYXJkVGl0bGU6IFwiRnVybml0dXJlIE5hbWVcIixcclxuICAgIGNhcmRQcmljZTogXCIkIDI1MFwiLFxyXG4gICAgY2FyZFRleHQ6IFwiSXQgaXMgYSBsb25nIGVzdGlhYnMgbGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIHRoZSBzZXJ2aWNlXCIsXHJcbiAgICBidG5UZXh0OiBcIk9yZGVyIE5vd1wiLFxyXG4gIH0sXHJcbl07XHJcbjtcclxuXHJcbmNvbnN0IGZ1cm5pdHVyZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1cm5pdHVyZV9fbGlzdFwiKTtcclxuXHJcbmlmIChmdXJuaXR1cmVEYXRhLmxlbmd0aCA+IDApIHtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1cm5pdHVyZURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjYXJkID0gYDxsaSBjbGFzcz1cInNlcnZpY2VfX2l0ZW1cIiBkYXRhLWNhcmRJZD1cIiR7ZnVybml0dXJlRGF0YVtpXS5pZH1cIj5gXHJcblx0XHRjYXJkICs9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiPmBcclxuXHRcdGlmIChmdXJuaXR1cmVEYXRhW2ldLmNhcmRUaXRsZSkge1xyXG5cdFx0XHRjYXJkICs9IGA8aW1nIGNsYXNzPVwiY2FyZF9faW1nIGNhcmRfX2ltZy0tYmlnXCIgc3JjPVwiJHtmdXJuaXR1cmVEYXRhW2ldLmNhcmRJbWd9XCIgYWx0PVwiJHtmdXJuaXR1cmVEYXRhW2ldLmNhcmRUaXRsZX1cIiB3aWR0aD1cIjI1NVwiIGhlaWdodD1cIjE3NVwiIC8+YFxyXG5cdFx0fVxyXG4gICAgY2FyZCArPSBgPGRpdiBjbGFzcz1cImNhcmRfX2hlYWRlclwiPmBcclxuXHRcdGlmIChmdXJuaXR1cmVEYXRhW2ldLmNhcmRUaXRsZSkge1xyXG5cdFx0XHRjYXJkICs9IGA8aDMgY2xhc3M9XCJjYXJkX190aXRsZVwiPiR7ZnVybml0dXJlRGF0YVtpXS5jYXJkVGl0bGV9PC9oMz5gXHJcblx0XHR9XHJcblx0XHRpZiAoZnVybml0dXJlRGF0YVtpXS5jYXJkUHJpY2UpIHtcclxuXHRcdFx0Y2FyZCArPSBgPHNwYW4gY2xhc3M9XCJjYXJkX19wcmljZVwiPiR7ZnVybml0dXJlRGF0YVtpXS5jYXJkUHJpY2V9PC9zcGFuPmBcclxuXHRcdH1cclxuICAgIGNhcmQgKz0gYDwvZGl2PmBcclxuXHRcdGlmIChmdXJuaXR1cmVEYXRhW2ldLmNhcmRUZXh0KSB7XHJcblx0XHRcdGNhcmQgKz0gYDxwIGNsYXNzPVwiY2FyZF9fdGV4dFwiPiR7ZnVybml0dXJlRGF0YVtpXS5jYXJkVGV4dH08L3A+YFxyXG5cdFx0fVxyXG5cdFx0aWYgKGZ1cm5pdHVyZURhdGFbaV0uYnRuVGV4dCkge1xyXG5cdFx0XHRjYXJkICs9IGBcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fYnV0dG9uXCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgaHJlZj1cIiNcIiBkYXRhLXNjcm9sbFRvPVwiI1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0eXBlPVwiYnV0dG9uXCI+JHtmdXJuaXR1cmVEYXRhW2ldLmJ0blRleHR9PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdGBcclxuXHRcdH1cclxuXHRcdGNhcmQgKz0gYDwvZGl2PjwvbGk+YDtcclxuXHJcbiAgICBmdXJuaXR1cmVMaXN0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjYXJkKTtcclxuICB9XHJcbn1cclxuO1xyXG4vKiBwb3B1cCA0MDQgZm9yIG5vbmV4aXN0ZW50IGxpbmtzICovXHJcblxyXG5jb25zdCBub25leGlzdGVudExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2hyZWY9XCIjXCJdJyk7XHJcbmNvbnN0IG5vbmV4aXN0ZW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG5bZGF0YS1zY3JvbGxUbz1cIiNcIl0nKTtcclxuY29uc3QgZnVybml0dXJlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnVybml0dXJlX19idXR0b25cIik7XHJcbmNvbnN0IGZ1cm5pdHVyZUZpbHRlckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZ1cm5pdHVyZV9fZmlsdGVyLWJ0blwiKTtcclxuY29uc3QgY2xpZW50c1Jldmlld0J0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNsaWVudHMtcmV2aWV3X19idG5cIik7XHJcbmNvbnN0IG5vbmV4aXN0ZW50QXJyYXkgPSBbLi4ubm9uZXhpc3RlbnRMaW5rcywgLi4ubm9uZXhpc3RlbnRCdG5zLCAuLi5mdXJuaXR1cmVCdXR0b25zLCAuLi5mdXJuaXR1cmVGaWx0ZXJCdG5zLCAuLi5jbGllbnRzUmV2aWV3QnRuc107XHJcblxyXG5jb25zdCBwb3B1cEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDQwNFwiKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwNDA0X19ib2R5XCIpO1xyXG5jb25zdCBjbG9zZVBvcHVwQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cDQwNF9fY2xvc2VcIik7XHJcblxyXG5ub25leGlzdGVudEFycmF5LmZvckVhY2goKG5vbmV4aXN0ZW50TGluaykgPT4ge1xyXG4gIG5vbmV4aXN0ZW50TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tlZFwiKTtcclxuICAgIHBvcHVwQmcuY2xhc3NMaXN0LmFkZChcInBvcHVwNDA0LS1hY3RpdmVcIik7XHJcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXA0MDRfX2JvZHktLWFjdGl2ZVwiKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5jbG9zZVBvcHVwQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja2VkXCIpO1xyXG4gIHBvcHVwQmcuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwNDA0LS1hY3RpdmVcIik7XHJcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwNDA0X19ib2R5LS1hY3RpdmVcIik7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cEJnKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrZWRcIik7XHJcbiAgICBwb3B1cEJnLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cDQwNC0tYWN0aXZlXCIpO1xyXG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwNDA0X19ib2R5LS1hY3RpdmVcIik7XHJcbiAgfVxyXG59KTtcclxuOyJdLCJmaWxlIjoibWFpbi5qcyJ9
