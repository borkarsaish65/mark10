var button = document.getElementById('check');

var cashAvailable = [1,5,10,20,50,100,500,2000];

var bill_amount_input = document.getElementById('bill_amount');
var cash_amount_input  =document.getElementById('cash_amount');
var bill_amount_error = document.querySelector('.bill_amount_error');
var cash_amount_error = document.querySelector('.cash_amount_error');
var error_message = document.getElementById('errorMessage')
var regExp = new RegExp("^\\d+$");
function showMessage(msg)
{

error_message.innerHTML = '<p>'+msg+'</p>';
error_message.style.display = 'block';

setTimeout(()=>{


error_message.style.display = 'none';
},2000)


}
cashAvailable = cashAvailable.reverse();



cash_amount_input.addEventListener('keyup',function(e){


  
    var isValid = regExp.test(this.value);

    if(isValid || this.value == '')
    {
       cash_amount_error.style.display = 'none';
    }
    else
    {
        cash_amount_error.style.display = 'block';
    }

})



bill_amount_input.addEventListener('keyup',function(e){

  
    var isValid = regExp.test(this.value);

    if(isValid || this.value == '')
    {
        cash_amount_input.disabled = false;
        bill_amount_error.style.display = 'none';
    }
    else
    {
        cash_amount_input.disabled = true;
        bill_amount_error.style.display = 'block';
    }

})




button.addEventListener('click',()=>{

    console.log(cash_amount_input.value.length,bill_amount_input.value.length)
    if(cash_amount_input.value.length == 0 || bill_amount_input.value.length == 0)
    {

        showMessage('Invalid input. Please enter amount in the input fields.');
        return;
    }

    if(!regExp.test(cash_amount_input.value) || !regExp.test(bill_amount_input.value))
    {

        showMessage('Invalid input. Please enter only numbers.');
        return;
    }

    var bill_amount = parseInt(bill_amount_input.value);
    var cash_amount = parseInt(cash_amount_input.value);

    var notes = [];

    var change = cash_amount-bill_amount;

var answer = [];

if(change < 0)
{
showMessage('Cash is less than the bill amount.')
return;
}

    while(change > 0)
    {
        console.log(change);

        for(var i=0;i<cashAvailable.length;i++)
        {

            if(change >= cashAvailable[i])
            {

               var numberOfnotes =Math.floor(change/cashAvailable[i]);
               console.log(numberOfnotes,cashAvailable,change);
               change = change - numberOfnotes * cashAvailable[i];

                notes.push({note:cashAvailable[i],
                            numberOfnotes:numberOfnotes})
            }
            else
            {
                notes.push({note:cashAvailable[i],
                    numberOfnotes:0})

            }

        }








    }



console.log(notes);
var HTMLresult = notes.map((noteCollection)=>{


    return '<td>'+noteCollection.numberOfnotes+'</td>';


})

console.log(HTMLresult)

document.getElementById('finalResult').innerHTML = HTMLresult.join('');
  
//this is a temporary change made for neog camp interview
})

