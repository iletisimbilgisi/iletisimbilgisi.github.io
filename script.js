function showIbanInfo() {
    var dropdown = document.getElementById("bank-select");
    var selectedBank = dropdown.value;

    var ibanInfos = document.getElementsByClassName("iban-info");
    for (var i = 0; i < ibanInfos.length; i++) {
        ibanInfos[i].style.display = "none";
    }

    if (selectedBank) {
        document.getElementById(selectedBank).style.display = "block";
    }
}

function openLiveSupport() {
    Tawk_API.toggle();
}
