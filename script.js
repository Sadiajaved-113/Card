// $(document).ready(function() {
//   var envelope = $('#envelope');
//   var btn_open = $('#open');
//   var btn_reset = $('#reset');

//   envelope.click(function() {
//       open();
//   });
//   btn_open.click(function() {
//         open();
//   });
//   btn_reset.click(function(){
//        close();
//   });

//   function open() {
//      envelope.addClass('open')
//              .removeClass('close');
//   }
//   function close() {
//     envelope.addClass('close')
//     .removeClass('open');
//   }
// })


document.addEventListener('DOMContentLoaded', function () { 
    var envelope = document.querySelector('#envelope');
    var btn_open = document.querySelector('#open');
    var btn_reset = document.querySelector('#reset');

    envelope.addEventListener('click', function () {
        open();
    });

    btn_open.addEventListener('click', function () {
        open();
    });

    btn_reset.addEventListener('click', function () {
        close();
    });

    function open() {
        envelope.classList.add('open');
        envelope.classList.remove('close');
    }

    function close() {
        envelope.classList.add('close');
        envelope.classList.remove('open');
    }
});
