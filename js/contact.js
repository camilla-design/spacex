/*Contact form*/
function formValidation() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var emailAdress = document.getElementById("email").value;
  var yourMessage = document.getElementById("message").value;
  var errorMessage = document.getElementById("error");


  errorMessage.style.padding = "18px";

  var text;

  if(firstName.length < 1) {
    text = "Your first name is not valid, please check if it is correct!";
    errorMessage.innerHTML = text;
    return false;
  }

  if(lastName.length < 2) {
    text = "Your last name is not valid, please check if it is correct!";
    errorMessage.innerHTML = text;
    return false;
  }

  if(emailAdress.indexOf("@") == -1 || emailAdress.lenght < 5) {
    text = "Your first email is not valid, please check if it is correct!";
    errorMessage.innerHTML = text;
    return false;
  }

  if(yourMessage.lenght < 0) {
    text = "Please enter a message with more than 50 characters";
    errorMessage.innerHTML = text;
    return false;
  }
  return true;
}

/*Contact information*/
const contactInformationUrl = "https://api.spacexdata.com/v3/info";

fetch(contactInformationUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    contactApi(json);
  })
  .catch(function (error) {
    console.log(error);
  })

  function contactApi(json) {

    const contactApiContainer = document.querySelector(".contact-info");
    let html = "";

    html += `
            <div class="contact-adress">
              <h3>Adress:</h3>
              <p>${json.headquarters.address}</p>
              <p>${json.headquarters.city}</p>
              <p>${json.headquarters.state}</p>
            </div>
            <div class="social-links">
              <h3>Follow us:</h3>
              <a href="${json.links.website}">Website</a>
              <a href="${json.links.flickr}">Flickr</a>
              <a href="${json.links.twitter}">Twitter</a>
            </div>
    `;
    contactApiContainer.innerHTML = html;
  }
