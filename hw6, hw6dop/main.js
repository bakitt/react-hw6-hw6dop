function createSquares() {
      var numberInput = document.getElementById("numberInput");
      var squareContainer = document.getElementById("squareContainer");
      var number = parseInt(numberInput.value);

      // Ограничение до 10 квадратов
      if (number > 10) {
        number = 10;
        numberInput.value = number;
      }

      squareContainer.innerHTML = "";


      for (var i = 0; i < number; i++) {
        var square = document.createElement("div");
        square.classList.add("square");

        // Чередование классы для чб квадратов
        if (i % 2 === 0) {
          square.classList.add("black");
        } else {
          square.classList.add("white");
        }

        squareContainer.appendChild(square);
      }
    }
