/*
 * Calculate compound interest
 * 
 * Formula: A = P(1 + r/n)^(nt)
 * where:
 * P = principal amount (initial investment)
 * r = annual interest rate (decimal)
 * n = number of times interest applied per time period
 * t = number of time periods elapsed (years)
 * A = amount after interest
 */

function calculateCompoundInterest(P, r, n, t) {
  const A = P * Math.pow((1 + r / n), n * t);
  return A;
}

// Example usage:
const principal = 1000;      // $1000
const annualRate = 0.05;     // 5% interest rate
const timesCompounded = 4;   // quarterly
const years = 5;

const amount = calculateCompoundInterest(principal, annualRate, timesCompounded, years);
console.log(`Amount after ${years} years: $${amount.toFixed(2)}`);
