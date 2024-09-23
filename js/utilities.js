function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

    function getInputValueByID(id){
        let inputValue = parseFloat(document.getElementById(id).value);
        return inputValue;
    }

    function getTotalDonateValueByID(id){
        let totalDonateValue = parseFloat(document.getElementById(id).innerText);
        return totalDonateValue;
    }
