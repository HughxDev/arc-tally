var weeklyEarnings =
  Array.from( document.querySelectorAll( '.roundup__info-block' ) )
  .filter( node => node.textContent.indexOf( 'Total Earned' ) !== -1 )
  .map( node => parseFloat( node.textContent.replace( 'Total Earned: $', '' ) ) )
  .filter( earning => earning > 0 )
;
var totalEarnings = weeklyEarnings.reduce( ( total, current ) => total + current );
var averageEarningsPerWeek = ( totalEarnings / weeklyEarnings.length );
var averageEarningsPerMonth = ( averageEarningsPerWeek * 4 );

console.log( `Weekly Earnings: $${weeklyEarnings.join( ', $' )}` );
console.log( `Total Weeks: ${weeklyEarnings.length}` );
console.log( `Total Earnings: $${totalEarnings}` );
console.log( `Average Earnings per Week: $${averageEarningsPerWeek}` );
console.log( `Average Earnings per Month: $${averageEarningsPerMonth}` );