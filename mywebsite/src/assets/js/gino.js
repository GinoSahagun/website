$(function() {

  $('.button-like')
    .bind('click', function(event) {
      $(this).toggleClass("liked");
    })

  //contact form input
  $("#submit").click(function() {
    var tele = $("#phone");
    var subject = $("#subject");
    var first = $("#fname");
    var last = $("#lname");
    var email = $("#email");
    if (email.val().length != 0) {
      if (!(validEmail(email.val()))) {
        email.focus();
        alert("Not Valid Email");
        return;
      }
    }





  });

  $("#phone").focusout(function() {
    var num = formatNumber($(this).val());
    console.log(num);
    if (num != false && num != null)
      $("#phone").val(num);
  });

});

function formatNumber(s) {
  var phone = (""+s).replace(/\D/g, "");
  console.log(phone);
  var m = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
  console.log(m);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

function validEmail(s) {
  var email = (s);
  var reg = new RegExp(/^([_A-Za-z0-9-]+)@(\w+)\.(\w{2,})$/);
  var t = reg.test(email);
  console.log(t);
  return t;
}
