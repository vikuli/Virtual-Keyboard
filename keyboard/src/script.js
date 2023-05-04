import { RU, ENG } from "./keymap.js";

const keyboard = document.querySelector(".key_container");
const textarea = document.querySelector(".textarea");
const key = document.querySelectorAll(".key");
const title = document.querySelector(".title");

const shiftLeft = document.querySelector(".ShiftLeft");
const shiftRight = document.querySelector(".ShiftRight");
const altLeft = document.querySelector(".AltLeft");
const altRight = document.querySelector(".AltRight");

let textareaContent = textarea.textContent.split("");
let cursorPosition = textarea.selectionStart;

let checkCapsLock = true;
let checkShift = false;
let checkAlt = false;
let pressedShift = false;
let pressedAlt = false;
let isEnglish = true;

textarea.addEventListener("click", () => {
  cursorPosition = textarea.selectionStart;
});

function toggleBacklight(key) {
  key.classList.add("key_press");
  setTimeout(() => key.classList.remove("key_press"), 300);
}

function addSingleSymbol(symbol) {
  cursorPosition = textarea.selectionStart;
  if (symbol.classList.contains("dbl_key") && !checkShift) {
    toggleBacklight(symbol);
    textareaContent.splice(
      cursorPosition,
      textarea.selectionEnd - cursorPosition,
      symbol.lastElementChild.innerHTML
    );
  }
  if (symbol.classList.contains("symbol1") && !checkShift) {
    toggleBacklight(symbol.parentElement);
    textareaContent.splice(
      cursorPosition,
      textarea.selectionEnd - cursorPosition,
      symbol.nextSibling.innerHTML
    );
  }
  if (symbol.classList.contains("symbol2") && !checkShift) {
    toggleBacklight(symbol.parentElement);
    textareaContent.splice(
      cursorPosition,
      textarea.selectionEnd - cursorPosition,
      symbol.innerHTML
    );
  }
  if (symbol.classList.contains("dbl_key") && checkShift) {
    toggleBacklight(symbol);
    textareaContent.splice(
      cursorPosition,
      textarea.selectionEnd - cursorPosition,
      symbol.firstElementChild.textContent
    );
  }
  if (symbol.classList.contains("symbol1") && checkShift) {
    toggleBacklight(symbol.parentElement);
    textareaContent.splice(
      cursorPosition,
      textarea.selectionEnd - cursorPosition,
      symbol.textContent
    );
  }
  if (symbol.classList.contains("single_key")) {
    toggleBacklight(symbol);
    textareaContent.splice(
      cursorPosition,
      textarea.selectionEnd - cursorPosition,
      symbol.innerHTML
    );
  }
  cursorPosition++;
  textarea.textContent = textareaContent.join("");
  textarea.selectionStart = cursorPosition;
}

function switchToUpperCase() {
  key.forEach((element) => {
    if (element.classList.contains("single_key")) {
      element.innerHTML = element.innerHTML.toUpperCase();
    }
  });
}

function switchToLowerCase() {
  key.forEach((element) => {
    if (element.classList.contains("single_key")) {
      element.innerHTML = element.innerHTML.toLowerCase();
    }
  });
}

function switchCapsLock(caps) {
  checkCapsLock = !checkCapsLock;
  caps.classList.toggle("key_press");
  if (checkCapsLock) {
    checkShift ? switchToLowerCase() : switchToUpperCase();
  } else {
    checkShift ? switchToUpperCase() : switchToLowerCase();
  }
}

function turnOnShift(shift) {
  if (!checkAlt) {
    checkShift = true;
    shift.classList.add("key_press");
    key.forEach((element) => {
      if (element.classList.contains("dbl_key")) {
        element.lastElementChild.classList.add("hide");
      }
    });
    checkCapsLock ? switchToLowerCase() : switchToUpperCase();
    shift.classList.contains("ShiftLeft")
      ? shiftRight.setAttribute("disabled", "disabled")
      : shiftLeft.setAttribute("disabled", "disabled");
  } else {
    toggleBacklight(shift);
    changeLanguage();
    turnOffAlt();
  }
}

function turnOffShift() {
  checkShift = false;
  shiftLeft.classList.remove("key_press");
  shiftRight.classList.remove("key_press");
  key.forEach((element) => {
    if (element.classList.contains("dbl_key")) {
      element.lastElementChild.classList.remove("hide");
    }
  });
  checkCapsLock ? switchToUpperCase() : switchToLowerCase();
  shiftRight.removeAttribute("disabled");
  shiftLeft.removeAttribute("disabled");
}

function turnOnAlt(alt) {
  turnOffShift();
  checkAlt = true;
  alt.classList.add("key_press");
  if (alt.classList.contains("AltLeft")) {
    altRight.setAttribute("disabled", "disabled");
    shiftRight.setAttribute("disabled", "disabled");
  } else {
    altLeft.setAttribute("disabled", "disabled");
    shiftLeft.setAttribute("disabled", "disabled");
  }
}

function turnOffAlt() {
  checkAlt = false;
  altLeft.classList.remove("key_press");
  altRight.classList.remove("key_press");
  shiftRight.removeAttribute("disabled");
  shiftLeft.removeAttribute("disabled");
  altLeft.removeAttribute("disabled");
  altRight.removeAttribute("disabled");
}

function deleteSymbolBack(backspace) {
  toggleBacklight(backspace);
  if (textarea.textContent) {
    if (textarea.selectionEnd > textarea.selectionStart) {
      cursorPosition = textarea.selectionStart;
      textareaContent.splice(
        cursorPosition,
        textarea.selectionEnd - cursorPosition
      );
    } else {
      if (cursorPosition) {
        cursorPosition--;
        textareaContent.splice(cursorPosition, 1);
      }
    }
    textarea.textContent = textareaContent.join("");
    textarea.selectionStart = cursorPosition;
  }
}

function deleteSymbolAhead(del) {
  toggleBacklight(del);
  if (textarea.textContent) {
    if (textarea.selectionEnd > textarea.selectionStart) {
      cursorPosition = textarea.selectionStart;
      textareaContent.splice(
        cursorPosition,
        textarea.selectionEnd - cursorPosition
      );
    } else {
      textareaContent.splice(cursorPosition, 1);
    }
    textarea.textContent = textareaContent.join("");
    textarea.selectionStart = cursorPosition;
  }
}

function moveCursor(arrow) {
  toggleBacklight(arrow);
  if (textarea.textContent) {
    if (arrow.classList.contains("ArrowLeft") && cursorPosition) {
      cursorPosition--;
    }
    if (
      arrow.classList.contains("ArrowRight") &&
      cursorPosition < textarea.textContent.length
    ) {
      cursorPosition++;
    }
    if (arrow.classList.contains("ArrowDown")) {
      cursorPosition = textarea.textContent.length;
    }
    if (arrow.classList.contains("ArrowUp")) {
      cursorPosition = 0;
    }
    textarea.selectionStart = cursorPosition;
    textarea.selectionEnd = cursorPosition;
  }
}

function addEnter(enter) {
  toggleBacklight(enter);
  cursorPosition = textarea.selectionStart;
  textareaContent.splice(
    cursorPosition,
    textarea.selectionEnd - cursorPosition,
    "\n"
  );
  textarea.textContent = textareaContent.join("");
  cursorPosition++;
  textarea.selectionStart = cursorPosition;
}

function addTab(tab) {
  toggleBacklight(tab);
  if (
    textarea.selectionEnd === textarea.selectionStart &&
    (textareaContent[cursorPosition - 1] === "\n" ||
      textarea.selectionStart === 0)
  ) {
    textareaContent.splice(cursorPosition, 0, " ", " ", " ", " ");
    textarea.textContent = textareaContent.join("");
    cursorPosition = cursorPosition + 4;
    textarea.selectionStart = cursorPosition;
  }
}

function switchKeymapCase(keymap, i) {
  if (keymap[i].length > 1) {
    return keymap[i];
  } else if ((checkShift && checkCapsLock) || (!checkShift && !checkCapsLock)) {
    return keymap[i].toLowerCase();
  } else {
    return keymap[i].toUpperCase();
  }
}

function draw() {
  let index = 0;
  if (!isEnglish) {
    for (let i = 0; i < key.length; i++) {
      if (key[i].classList.contains("dbl_key")) {
        if (RU[index]) {
          key[i].firstElementChild.innerHTML = switchKeymapCase(RU, index);
          key[i].lastElementChild.innerHTML = switchKeymapCase(RU, index + 1);
          index += 2;
        } else {
          key[i].classList.remove("dbl_key");
          key[i].classList.add("single_key");
          key[i].innerHTML = switchKeymapCase(RU, index + 1);
          index += 2;
        }
      } else {
        key[i].innerHTML = switchKeymapCase(RU, index);
        index++;
      }
    }
    title.innerHTML = "Виртуальная клавиатура";
    textarea.setAttribute(
      "placeholder",
      "Привет! Нажми 'AltLeft' + 'ShiftLeft' или 'AltRight' + 'ShiftRight', чтобы переключить язык :)"
    );
  } else {
    for (let i = 0; i < key.length; i++) {
      if (
        key[i].classList.contains("single_key") &&
        key[i].classList.contains("spec")
      ) {
        key[i].classList.remove("single_key");
        key[i].classList.add("dbl_key");
      }
      if (key[i].classList.contains("dbl_key")) {
        key[i].innerHTML = `<span class="symbol1">${switchKeymapCase(
          ENG,
          index
        )}</span><span class="symbol2">${switchKeymapCase(
          ENG,
          index + 1
        )}</span>`;
        index += 2;
      } else {
        key[i].innerHTML = switchKeymapCase(ENG, index);
        index++;
      }
    }
    title.innerHTML = "Virtual Keyboard";
    textarea.setAttribute(
      "placeholder",
      "Hello! Press 'AltLeft' + 'ShiftLeft' or 'AltRight' + 'ShiftRight' to switch the language :)"
    );
  }
}

function changeLanguage() {
  isEnglish = !isEnglish;
  draw();
}

keyboard.addEventListener("mousedown", (event) => {
  if (!event.target.classList.contains("textarea")) {
    event.preventDefault();
  }
});

keyboard.addEventListener("click", (event) => {
  if (event.target.classList.contains("key_container")) {
    return;
  }
  if (
    event.target.classList.contains("single_key") ||
    event.target.classList.contains("dbl_key") ||
    event.target.parentElement.classList.contains("dbl_key")
  ) {
    addSingleSymbol(event.target);
  }
  if (event.target.classList.contains("CapsLock")) {
    switchCapsLock(event.target);
  }
  if (
    event.target.classList.contains("ShiftLeft") ||
    event.target.classList.contains("ShiftRight")
  ) {
    checkShift ? turnOffShift() : turnOnShift(event.target);
  }
  if (event.target.classList.contains("Backspace")) {
    deleteSymbolBack(event.target);
  }
  if (event.target.classList.contains("Delete")) {
    deleteSymbolAhead(event.target);
  }
  if (event.target.classList.contains("arrow")) {
    moveCursor(event.target);
  }
  if (event.target.classList.contains("Enter")) {
    addEnter(event.target);
  }
  if (event.target.classList.contains("Tab")) {
    addTab(event.target);
  }
  if (
    event.target.classList.contains("AltLeft") ||
    event.target.classList.contains("AltRight")
  ) {
    turnOnAlt(event.target);
  }
});

textarea.addEventListener("keydown", (event) => {
  event.preventDefault();
  key.forEach((el) => {
    if (
      el.innerHTML.toLowerCase() === event.key.toLowerCase() &&
      el.classList.contains("single_key")
    ) {
      addSingleSymbol(el);
    }
    if (
      el.classList.contains("dbl_key") &&
      (el.lastElementChild.innerHTML === event.key ||
        el.firstElementChild.textContent === event.key)
    ) {
      addSingleSymbol(el);
    }
    if (el.classList.contains(event.key) && event.key === "CapsLock") {
      switchCapsLock(el);
    }
    if (el.classList.contains(event.key) && event.key === "Enter") {
      addEnter(el);
    }
    if (el.classList.contains(event.key) && event.key === "Backspace") {
      deleteSymbolBack(el);
    }
    if (el.classList.contains(event.key) && event.key === "Tab") {
      addTab(el);
    }
    if (el.classList.contains(event.key) && event.key === "Delete") {
      deleteSymbolAhead(el);
    }
    if (
      el.classList.contains(event.key) &&
      (event.key === "ArrowUp" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowRight")
    ) {
      moveCursor(el);
    }
  });
  if (event.code === "ShiftLeft") {
    if (pressedShift) {
      event.preventDefault();
    } else {
      shiftLeft.click();
    }
    pressedShift = true;
  }
  if (event.code === "ShiftRight") {
    if (pressedShift) {
      event.preventDefault();
    } else {
      shiftRight.click();
    }
    pressedShift = true;
  }
  if (event.code === "AltLeft") {
    if (pressedAlt) {
      event.preventDefault();
    } else {
      altLeft.click();
    }
    pressedAlt = true;
  }
  if (event.code === "AltRight") {
    if (pressedAlt) {
      event.preventDefault();
    } else {
      altRight.click();
    }
    pressedAlt = true;
  }
});

textarea.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.code === "ShiftLeft") {
    pressedShift = false;
    turnOffShift();
  }
  if (event.code === "ShiftRight") {
    pressedShift = false;
    turnOffShift();
  }
  if (event.code === "AltLeft") {
    pressedAlt = false;
    turnOffAlt();
  }
  if (event.code === "AltRight") {
    pressedAlt = false;
    turnOffAlt();
  }
});

// TODO: сделать горячие клавиши
// TODO: сохранять раскладку в локал
