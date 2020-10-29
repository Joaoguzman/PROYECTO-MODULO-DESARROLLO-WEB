select = document.getElementById("year");
for(i = 1900; i <= 2020; i++){
    option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
}