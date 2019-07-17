// Listening for form submittion

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var city = getInputVal('city');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var topic = getInputVal('topic');
    var comment = getInputVal('comment');
    var am = getInputVal('am');
    var pm = getInputVal('pm');
    var promo = getInputVal('promo');

    function getInputVal(id) {
      return document.getElementById(id.value);
    }
    console.log(name, city, email, phone, topic, comment, am, pm, promo);
}