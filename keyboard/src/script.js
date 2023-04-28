// Заполнение документа

/*function coverDoc() {
  document.querySelector("body").innerHTML =
    "<h1 class=\"title\">Virtual Keyboard</h1>";
  document.querySelector("body").innerHTML +=
    "<textarea name=\"text\" class=\"textarea\" placeholder=\"Hello! Press 'AltLeft' + 'ShiftLeft' to switch the language :)\" autofocus></textarea>";
  document.querySelector("body").innerHTML +=
    "<div class=\"key_container\"></div>";
  document.querySelector(".key_container").innerHTML =
    "<div class=\"key dbl_key spec Backquote\"><span class=\"symbol1\">~</span><span class=\"symbol2\">`</span></div>";
  document.querySelector(".key_container").innerHTML +=
    "<div class=\"key dbl_key spec Digit1\"><span class=\"symbol1\">!</span><span class=\"symbol2 as\">1</span></div>";
   document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit2"><span class="symbol1">@</span><span class="symbol2">2</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit3"><span class="symbol1">#</span><span class="symbol2">3</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit4"><span class="symbol1">$</span><span class="symbol2">4</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit5"><span class="symbol1">%</span><span class="symbol2">5</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit6"><span class="symbol1">^</span><span class="symbol2">6</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit7"><span class="symbol1">&</span><span class="symbol2">7</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit8"><span class="symbol1">*</span><span class="symbol2">8</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit9"><span class="symbol1">(</span><span class="symbol2">9</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Digit0"><span class="symbol1">)</span><span class="symbol2">0</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Minus"><span class="symbol1">_</span><span class="symbol2">-</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Equal"><span class="symbol1">+</span><span class="symbol2">=</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key key_2x spec Backspace">Backspace</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key key_2x spec Tab">Tab</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">Q</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">W</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">E</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">R</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">T</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">Y</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">U</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">I</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">O</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">P</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec BracketLeft"><span class="symbol1">{</span><span class="symbol2">[</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec BracketRight"><span class="symbol1">}</span><span class="symbol2">]</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Backslash"><span class="symbol1">|</span><span class="symbol2">\\</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key key_2x spec CapsLock">Caps Lock</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">A</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">S</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">D</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">F</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">G</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">H</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">J</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">K</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">L</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Semicolon"><span class="symbol1">:</span><span class="symbol2">;</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Quote"><span class="symbol1">"</span><span class="symbol2">\'</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key key_2x spec Enter">Enter</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key key_2x spec ShiftLeft">Shift</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">Z</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">X</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">C</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">V</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">B</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">N</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key">M</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Comma"><span class="symbol1"><</span><span class="symbol2">,</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Period"><span class="symbol1">></span><span class="symbol2">.</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key dbl_key spec Slash"><span class="symbol1">?</span><span class="symbol2">/</span></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key arrow spec ArrowUp">↑</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key key_2x spec ShiftRight">Shift</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key spec ControlLeft">Ctrl</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key spec MetaLeft">Win</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key spec AltLeft">Alt</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key key_6x spec Space"></div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key spec AltRight">Alt</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key spec ControlRight">Ctrl</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key arrow spec ArrowLeft">←</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key arrow spec ArrowDown">↓</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key arrow spec ArrowRight">→</div>';
  document.querySelector(".key_container").innerHTML +=
    '<div class="key spec Delete">Del</div>';
}
coverDoc();*/

// Добавляем/убираем подсветку по нажатию на кнопку клавы

/*document.addEventListener("keydown", (Event) => {
  document.querySelectorAll(".key").forEach((el) => {
    if (el.classList.contains(`${Event.code}`)) {
      el.classList.add("key_press");
      if (el.classList.contains("Tab")) {
        setTimeout(() => {
          document.querySelector(".Tab").classList.remove("key_press");
        }, 300);
      }
    } else if (el.innerHTML === Event.key.toUpperCase()) {
      el.classList.add("key_press");
    }
  });
});

function lightOff() {
  document.addEventListener("keyup", (Event) => {
    document.querySelectorAll(".key").forEach((el) => {
      el.classList.remove("key_press");
    });
  });
}
lightOff();

// Добавляем/убираем подсветку по клику на кнопку мыши

let stop = true;

document.addEventListener("mousedown", (Event) => {
  if (stop) {
    if (
      Event.target.classList.contains("symbol1") ||
      Event.target.classList.contains("symbol2")
    ) {
      const a = Event.target.parentNode;
      a.classList.add("key_press");
      document.querySelectorAll(".symbol2").forEach((el) => {
        if (el === Event.target) {
          document.querySelector(".textarea").innerHTML +=
            Event.target.innerHTML;
        } else if (el.parentNode === a) {
          document.querySelector(".textarea").innerHTML += el.innerHTML;
        }
      });
    }
    if (Event.target.classList.contains("key")) {
      Event.target.classList.add("key_press");
      if (Event.target.childNodes && Event.target.childNodes.length > 1) {
        document.querySelector(".textarea").innerHTML +=
          Event.target.childNodes[1].innerHTML;
      } else {
        document.querySelector(".textarea").innerHTML += Event.target.innerHTML;
      }
    }
  }
});

function clickLightOff() {
  document.addEventListener("mouseup", (Event) => {
    Event.target.parentNode.classList.remove("key_press");
    Event.target.classList.remove("key_press");
  });
}
clickLightOff();

let count = 0;

// Русская раскладка

const arrRU = [
  "",
  "Ё",
  "!",
  "1",
  '"',
  "2",
  "№",
  "3",
  ";",
  "4",
  "%",
  "5",
  ":",
  "6",
  "?",
  "7",
  "*",
  "8",
  "(",
  "9",
  ")",
  "0",
  "_",
  "-",
  "+",
  "=",
  "Backspace",
  "Tab",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "",
  "Х",
  "",
  "Ъ",
  "/",
  "\\",
  "Caps Lock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "",
  "Ж",
  "",
  "Э",
  "Enter",
  "Shift",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "",
  "Б",
  "",
  "Ю",
  ",",
  ".",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  " ",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
  "Del",
];

// Английская раскладка

const arrENG = [
  "~",
  "`",
  "!",
  "1",
  "@",
  "2",
  "#",
  "3",
  "$",
  "4",
  "%",
  "5",
  "^",
  "6",
  "&",
  "7",
  "*",
  "8",
  "(",
  "9",
  ")",
  "0",
  "_",
  "-",
  "+",
  "=",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "[",
  "}",
  "]",
  "|",
  "\\",
  "Caps Lock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  ";",
  '"',
  "'",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  " ",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
  "Del",
];

// Комбинация клавиш для смены языка

document.onkeydown = function (event) {
  if (event.code === "AltLeft") {
    document.onkeyup = function (event) {
      if (event.code === "ShiftLeft") {
        if (count === 0) {
          count = 1;
          localStorage.setItem("count", count);
        } else {
          count = 0;
          localStorage.setItem("count", count);
        }
        switchLang();
        document.onkeyup = null;
      } else {
        document.onkeyup = null;
      }
    };
  } else if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    stop = false;
    document.onclick = function (Event) {
      if (Event.target.classList.contains("symbol1")) {
        document.querySelector(".textarea").innerHTML += Event.target.innerHTML;
      } else if (Event.target.classList.contains("symbol2")) {
        document.querySelector(".textarea").innerHTML +=
          Event.target.parentNode.childNodes[0].innerHTML;
      } else if (Event.target.classList.contains("dbl_key")) {
        document.querySelector(".textarea").innerHTML +=
          Event.target.childNodes[0].innerHTML;
      } else {
        document.onclick = null;
        stop = true;
      }
      document.onclick = null;
      stop = true;
    };
  }
};

if (localStorage.getItem("count") === "1") {
  count = +localStorage.getItem("count");
  switchLang();
} else if (localStorage.getItem("count") === "0") {
  count = +localStorage.getItem("count");
  switchLang();
}

// Смена языков

function switchLang() {
  let number = 0;
  if (count === 0) {
    const key = document.querySelectorAll(".key");
    for (let i = 0; i < key.length; i++) {
      if (key[i].classList.contains("dbl_key")) {
        key[i].childNodes[0].innerHTML = arrENG[number];
        key[i].childNodes[1].innerHTML = arrENG[number + 1];
        number += 2;
      } else {
        key[i].innerHTML = arrENG[number];
        number++;
      }
    }
  } else if (count === 1) {
    const key = document.querySelectorAll(".key");
    for (let i = 0; i < key.length; i++) {
      if (key[i].classList.contains("dbl_key")) {
        key[i].childNodes[0].innerHTML = arrRU[number];
        key[i].childNodes[1].innerHTML = arrRU[number + 1];
        number += 2;
      } else {
        key[i].innerHTML = arrRU[number];
        number++;
      }
    }
  }
}
switchLang();*/

const keyboard = document.querySelector(".key_container");
const textarea = document.querySelector(".textarea");
const key = document.querySelectorAll(".key");
const shiftLeft = document.querySelector(".ShiftLeft");
const shiftRight = document.querySelector(".ShiftRight");

let textareaContent = textarea.textContent.split("");

let checkCapsLock = true;
let checkShift = false;

let cursorPosition = textarea.selectionStart;

textarea.addEventListener("click", () => {
  cursorPosition = textarea.selectionStart;
});

function addSingleSymbol(symbol) {
  if (symbol.classList.contains("dbl_key") && !checkShift) {
    textareaContent.splice(
      cursorPosition,
      0,
      symbol.lastElementChild.innerHTML
    );
  }
  if (symbol.classList.contains("symbol1") && !checkShift) {
    textareaContent.splice(cursorPosition, 0, symbol.nextSibling.innerHTML);
  }
  if (symbol.classList.contains("symbol2") && !checkShift) {
    textareaContent.splice(cursorPosition, 0, symbol.innerHTML);
  }
  if (symbol.classList.contains("dbl_key") && checkShift) {
    textareaContent.splice(
      cursorPosition,
      0,
      symbol.firstElementChild.textContent
    );
  }
  if (symbol.classList.contains("symbol1") && checkShift) {
    textareaContent.splice(cursorPosition, 0, symbol.textContent);
  }
  if (symbol.classList.contains("single_key")) {
    textareaContent.splice(cursorPosition, 0, symbol.innerHTML);
  }
  cursorPosition++;
  textarea.textContent = textareaContent.join("");
  textarea.selectionStart = cursorPosition;
}

function switchToUpperCase() {
  key.forEach((element) => {
    if (!element.classList.contains("spec")) {
      element.innerHTML = element.innerHTML.toUpperCase();
    }
  });
}

function switchToLowerCase() {
  key.forEach((element) => {
    if (!element.classList.contains("spec")) {
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

function switchShift(shift) {
  checkShift = !checkShift;
  shift.classList.toggle("key_press");
  key.forEach((element) => {
    if (element.classList.contains("dbl_key")) {
      element.lastElementChild.classList.toggle("hide");
    }
  });
  if (checkShift) {
    checkCapsLock ? switchToLowerCase() : switchToUpperCase();
    shift.classList.contains("ShiftLeft")
      ? shiftRight.setAttribute("disabled", "disabled")
      : shiftLeft.setAttribute("disabled", "disabled");
  } else {
    checkCapsLock ? switchToUpperCase() : switchToLowerCase();
    shiftRight.removeAttribute("disabled");
    shiftLeft.removeAttribute("disabled");
  }
}

function deleteSymbol() {
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

function moveCursor(arrow) {
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
    switchShift(event.target);
  }
  if (event.target.classList.contains("Backspace")) {
    deleteSymbol();
  }
  if (event.target.classList.contains("arrow")) {
    moveCursor(event.target);
  }
});
