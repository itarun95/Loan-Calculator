//submit
document.getElementById('loan-form').addEventListener('submit', function(e){

    //show the loading
    document.getElementById('loading').style.display = 'block';

    //hide the results
    document.getElementById('results').style.display = 'none';

    //set timer for on sec to display the loading
    setTimeout(calculateResult, 1000);

    e.preventDefault();
});

function calculateResult(e){

    //get the inputs
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthly = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    //calculate monthly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const month = (principal * x * calculatedInterest)/(x-1);

    if(isFinite(month)){
        monthly.value = month.toFixed(2);
        totalPayment.value = (month * calculatedPayments).toFixed(2);
        totalInterest.value = ((month * calculatedPayments) - principal).toFixed(2);
        //hide the loading
        document.getElementById('loading').style.display = 'none';
    
        //show the results
        document.getElementById('results').style.display = 'block';
    

    }

    else{
        showError('Please Check the details that are entered');
    }
    
}

    // Show Error
function showError(error){
    // Create a div
    const errorDiv = document.createElement('div');
  
    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Add class
    errorDiv.className = 'alert alert-danger';
  
    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insert error above heading
    card.insertBefore(errorDiv, heading);
  
    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }
  
  // Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }


