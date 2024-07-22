
        document.addEventListener('DOMContentLoaded', function() {
          //References to each element in the form
          const radioButtons = document.querySelectorAll('input[name="product"]');
          const quantityInput = document.getElementById('amount');
          const calculateTotal = document.getElementById('submit');
          const resultElement = document.getElementById('total');

          //Function to calcluate the results
          function calculateResult() {
            //get the selected radiobutton amount
            const selectedRadio = document.querySelector('input[name="product"]:checked'];
            if (!selectedRadio) {
              alert("Please select a radio button value.");
              return;
            }

            const radioValue = parseFloat(selectedRadio.value);
            const quantity = parseFloat(quantityInput.value);

            //Calculate results
            const result = radioValue * quantity;

            //Display results
            resultElement.textContent = result;
          }

          calculateButton.addEventListener('click', calculateResult);
        });
