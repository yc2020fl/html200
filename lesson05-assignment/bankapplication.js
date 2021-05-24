let numberToBegin= 1000;

function getBankAccount ( ) {
  let input = prompt('Please enter W to withdraw money, D to make deposit, B to view your balance, and Q to Exit the Application');
    switch (input) {
        case input ='W': {
            let result = 0;
            let input = prompt ('Please Enter the Amount Your Want to Withdraw');
            result = numberToBegin  - Number(input);
            alert('Your have withdraw $' + Number(input) + ',' + 'Your Remaining Balance is Now $' + result);
            getBankAccount( );
            break;
        }
        case input ='D': {
          let result = 0;
          let input = prompt ('Please Enter the Amount Your Want to Deposit');
          result = numberToBegin  + Number(input);
          alert('Your have deposit $' + Number(input) + ',' + 'Your Remaining Balance is Now $' + result);
          getBankAccount( );
          break;
        }
        case input ='B': {
          alert('Your Remaining Balance is Now $' + numberToBegin);
          getBankAccount( );
          break;
        }
        case input ='Q': {
            break;
        }
        default: {
            alert( 'Are You Sure To Exit?');
        }
    }
}
