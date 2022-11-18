console.log('Assignment Eight');
console.log('----------------');

day = ' Friday '.trim();
day = 'Saturday';
day = 'Sunday';

switch (day) {
  case 'Friday':
  case 'Saturday':
  case 'Sunday':
    console.log('No Appointments Available');
    break;

  case 'Monday':
  case 'Thursday':
    console.log('From 10:00 AM To 5:00 PM');
    break;

  case 'Tuesday':
    console.log('From 10:00 AM To 6:00 PM');
    break;

  case 'Wednesday':
    console.log('From 10:00 AM To 7:00 PM');
    break;

  default:
    console.log('Its Not A Valid Day');
}

// Switch challenge
let job = 'Designer';
let salary = 0;

switch (job) {
  case 'Manager':
    salary = 8000;
    console.log(`Salary is: ${salary}`);
    break;

  case 'IT':
  case 'Support':
    salary = 6000;
    console.log(`Salary is: ${salary}`);
    break;

  case 'Developer':
  case 'Designer':
    salary = 7000;
    console.log(`Salary is: ${salary}`);
    break;

  default:
    salary = 4000;
    console.log(`Salary is: ${salary}`);
}
