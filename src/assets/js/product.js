/*
 * ----------------------------------------
 * Add default functions for brand page
 * ----------------------------------------
 */

import './default';
import './collapse';
import './nav-tab';

/*
 * ----------------------------------------
 * Feature carousel use slick-carousel library,
 * and custom arrow
 * ----------------------------------------
 */

$('.slider').slick({
  nextArrow: '<i class="fa fa-angle-right slick-arrow-next"></i>',
  prevArrow: '<i class="fa fa-angle-left slick-arrow-prev"></i>',
});

/*
 * ----------------------------------------
 * Feature increase, decrease product amount
 * ----------------------------------------
 */
const input = $('.product__amount');
const btnInc = $('.product__inc-btn');
const btnDes = $('.product__des-btn');
const min = Number(input.attr('min'));
const max = Number(input.attr('max'));

input.on('input', function (e) {
  const value = Number(e.target.value);

  if (value >= max) {
    input.val(max);
    return;
  } 

  if (value <= min) {
    input.val(min);
    return
  }
  
});

btnInc.on('click', function () {
  let value = Number(input.val());

  if (value >= max) return;

  value++;
  input.val(value);
});

btnDes.on('click', function () {
  let value = Number(input.val());

  if (value <= min) return;

  value--;
  input.val(value);
});
