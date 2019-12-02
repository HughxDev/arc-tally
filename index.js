var invoicedAmounts = Array.from( document.querySelectorAll( '.roundup__info-block' ) )
  .filter( ( node ) => node.textContent.indexOf( 'Total Earned' ) !== -1 )
  .map( ( node ) => parseFloat( node.textContent.replace( 'Total Earned: $', '' ) ) )
  .filter( ( earning ) => earning > 0 );
var totalEarnings = invoicedAmounts.reduce( ( total, current ) => total + current );

var invoicedHours = Array.from( document.querySelectorAll( '.roundup__info-block' ) )
  .filter( ( node ) => node.textContent.indexOf( 'Total Spent' ) !== -1 )
  .map( ( node ) => parseFloat( node.textContent.replace( /Total Spent: ([0-9]+(?:\.[0-9]+)?) hours/, '$1' ) ) )
  .filter( ( hours ) => hours > 0 );
var totalHours = invoicedHours.reduce( ( total, current ) => total + current );

var hourlyRate = Math.round( totalEarnings / totalHours );

var averageEarningsPerWorkDay = ( hourlyRate * 8 );
var averageEarningsPerInvoice = ( totalEarnings / invoicedAmounts.length );
// Assuming 1 invoice/week:
var averageEarningsPerMonth = ( averageEarningsPerInvoice * 4 );
var averageEarningsPerYear = ( averageEarningsPerMonth * 12 );

var averageHoursPerInvoice = ( totalHours / invoicedAmounts.length );

console.log( `Hourly rate: $${hourlyRate}` );
console.log( `Invoiced Amounts: $${invoicedAmounts.join( ', $' )}` );
console.log( `Total Hours: ${totalHours}` );
console.log( `Total Invoices: ${invoicedAmounts.length}` );
console.log( `Total Earnings: $${totalEarnings}` );

console.log( `Average Hours per Invoice: ${averageHoursPerInvoice}` );

console.log( `Average Earnings per Work Day: $${averageEarningsPerWorkDay}` );
console.log( `Average Earnings per Invoice: $${averageEarningsPerInvoice}` );
console.log( `Average Earnings per Month @ 1 invoice/week: $${averageEarningsPerMonth}` );
console.log( `Average Earnings per Year @ 1 invoice/week: $${averageEarningsPerYear}` );
