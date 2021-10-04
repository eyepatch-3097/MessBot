let table = document.getElementsByTagName("tr"); //class name of the table is tr

let sum = 0; // mess total

//for loop to go through all the tr
for (let i=0; i<table.length; i++) {

    //check if the tr has odd class or even class
    if (table[i].classList.contains("odd") || table[i].classList.contains("even")) {

        //add the table data in the 1st cell which has the price of each meal
        sum += parseInt(table[i].getElementsByTagName("td")[1].innerText);
    }
}

//display the total bill to the user
alert(sum);