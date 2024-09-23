const btnDonationEl = document.getElementById('btn-donation');
const btnHistoryEl = document.getElementById('btn-history');
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
// card1
document.getElementById('btn-donation-now').addEventListener('click', (event)=>{
    event.preventDefault();
    const modal = document.getElementById('my_modal_1');
    if(isNaN(getInputValueByID('donation-amount')) || getInputValueByID('donation-amount') < 0 || getInputValueByID('donation-amount') > availableBalanceEl.innerText || getInputValueByID('donation-amount') === -0 ){
        alert("invalid Donation Amount");
        document.getElementById('donation-amount').value = ''; 
        modal.style.display = 'none';
        location.reload();

    }
    else{
        let amount = getInputValueByID('donation-amount');
        let totalDonated = getTotalDonateValueByID('total-donated');
        let newTotalDonated = totalDonated + amount;
        document.getElementById('total-donated').innerText = newTotalDonated.toFixed(2);
        let availableBalance = parseFloat(availableBalanceEl.innerText);
        let newAvailableBalance = availableBalance - amount;
        availableBalanceEl.innerText = newAvailableBalance.toFixed(2);
        document.getElementById('donation-amount').value = '';
        historyCardEl.innerHTML +=` <div class="card p-8 bg-base-100 border border-neutral-300 shadow-lg">
                    <h3 class="px-2">${amount} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
                    <p class="mt-4 bg-slate-100 px-2 rounded-lg py-4">Date: ${Date()}</p>
                </div>`;
                
    }

});

// card2

document.getElementById('btn-donation-now2').addEventListener('click', (event)=>{
    event.preventDefault();
    const modal = document.getElementById('my_modal_2');
    if(isNaN(getInputValueByID('donation-amount2')) || getInputValueByID('donation-amount2') < 0 || getInputValueByID('donation-amount2') > availableBalanceEl.innerText || getInputValueByID('donation-amount2') === -0  ){
        alert("invalid Donation Amount");
        document.getElementById('donation-amount2').value = ''; 
        modal.style.display = 'none';
        location.reload();

    }
    else{
        let amount = getInputValueByID('donation-amount2');
        let totalDonated = getTotalDonateValueByID('total-donated2');
        let newTotalDonated = totalDonated + amount;
        document.getElementById('total-donated2').innerText = newTotalDonated.toFixed(2);
        let availableBalance = parseFloat(availableBalanceEl.innerText);
        let newAvailableBalance = availableBalance - amount;
        availableBalanceEl.innerText = newAvailableBalance.toFixed(2);
        document.getElementById('donation-amount2').value = '';
        historyCardEl.innerHTML +=` <div class="card p-8 bg-base-100 border border-neutral-300 shadow-lg">
                    <h3 class="px-2">${amount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
                    <p class="mt-4 bg-slate-100 px-2 rounded-lg py-4">Date: ${Date()}</p>
                </div>`;
                
    }

});

// card 3

document.getElementById('btn-donation-now3').addEventListener('click', (event)=>{
    event.preventDefault();
    const modal = document.getElementById('my_modal_3');
    if(isNaN(getInputValueByID('donation-amount3')) || getInputValueByID('donation-amount3') < 0 || getInputValueByID('donation-amount3') > availableBalanceEl.innerText || getInputValueByID('donation-amount3') === -0  ){
        alert("invalid Donation Amount");
        document.getElementById('donation-amount3').value = ''; 
        modal.style.display = 'none';
        location.reload();

    }
    else{
        let amount = getInputValueByID('donation-amount3');
        let totalDonated = getTotalDonateValueByID('total-donated3');
        let newTotalDonated = totalDonated + amount;
        document.getElementById('total-donated3').innerText = newTotalDonated.toFixed(2);
        let availableBalance = parseFloat(availableBalanceEl.innerText);
        let newAvailableBalance = availableBalance - amount;
        availableBalanceEl.innerText = newAvailableBalance.toFixed(2);
        document.getElementById('donation-amount3').value = '';
        historyCardEl.innerHTML +=` <div class="card p-8 bg-base-100 border border-neutral-300 shadow-lg">
                    <h3 class="px-2">${amount} Taka is aid for Injured in the Quota Movement</h3>
                    <p class="mt-4 bg-slate-100 px-2 rounded-lg py-4">Date: ${Date()}</p>
                </div>`;
                
    }

});
