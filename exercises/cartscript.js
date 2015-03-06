document.addEventListener("DOMContentLoaded", function () {
        var table = document.getElementById("cart_main");
        var lines = table.getElementsByClassName("cart_line");
        var line_count = lines.length;


        var getTotal = function () {
            var total = 0;

            for (var i = 0; i < line_count; i++) {
                var line = lines[i];

                var qty = line.getElementsByClassName("qty")[0];
                var quantity = parseFloat(qty.getElementsByTagName("input")[0].value);

                var price = parseFloat(line.getElementsByClassName("item_price")[0].innerHTML);
                var subtotalElement = line.getElementsByClassName("item_total")[0];

                var subTotal = quantity * price;
                subtotalElement.innerHTML = subTotal;
                total += subTotal;
            }
            var totalElement = document.getElementById("cart_total");
            totalElement.innerHTML = total;
        };

        for (var c = 0; c < line_count; c++) {
            var line = lines[c];
            var quantityElement = line.getElementsByTagName("input")[0];
            quantityElement.addEventListener("change", function () {
                getTotal();
            });
        }
        getTotal();
    });