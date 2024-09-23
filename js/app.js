const btnDonationEl = document.getElementById('btn-donation');
const btnHistoryEl = document.getElementById('btn-history');
const donationAmountEl = document.getElementById('donation-amount');
const btnDonationNowEl = document.getElementById('btn-donation-now');
const totalDonatedEl = document.getElementById('total-donated');
const availableBalanceEl = document.getElementById('available-balance');
const historyCardEl = document.getElementById('history-card');


function ShowDonation(event){
    showSectionById('donation-section');
    event.classList.add('bg-primary');
    event.classList.add('hover:bg-lime-400');
    btnHistoryEl.classList.remove('bg-primary');

}
function historyDonation(event){
    showSectionById('history-section');
    event.classList.add('bg-primary');
    event.classList.add('hover:bg-lime-400');
    btnDonationEl.classList.remove('bg-primary');

}

btnDonationNowEl.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(event);
    const modal = document.getElementById('my_modal_1');
    if(isNaN(parseFloat(donationAmountEl.value)) || parseFloat(donationAmountEl.value) < 0){
        alert("invalid input");
        donationAmountEl.value = ''; 
        modal.style.display = 'none';
        location.reload();

    }
    else{
        let amount = parseFloat(donationAmountEl.value);
        let totalDonated = parseFloat(totalDonatedEl.innerText);
        let newTotalDonated = totalDonated + amount;
        document.getElementById('total-donated').innerText = newTotalDonated;
        let availableBalance = parseFloat(availableBalanceEl.innerText);
        let newAvailableBalance = availableBalance - amount;
        availableBalanceEl.innerText = newAvailableBalance;
        donationAmountEl.value = '';
        historyCardEl.innerHTML +=` <div class="card p-8 bg-base-100 border border-neutral-300 shadow-lg">
                    <h3 class="px-2">${amount} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
                    <p class="mt-4 bg-slate-100 px-2 rounded-lg py-4">Date: ${Date()}</p>
                </div>`;
                
    }

});
