var users = [
  {
    u_name: "Prakhar031",
    u_password: "#Abc123",
    u_email: "abc@gmail.com",
    status: "inactive",
  },
  {
    u_name: "Sterben",
    u_password: "beta123",
    u_email: "alpha@gmail.com",
    status: "inactive",
  },
];

var temp = {
  u_name: "",
  u_password: "",
  u_email: "",
};

function sign_up() {
  var username = document.getElementById("name_user").value;
  var password = document.getElementById("pass_user").value;
  var email_id = document.getElementById("email_user").value;
  temp.u_name = username;
  temp.u_email = email_id;
  temp.u_password = password;

  users.push(temp);
  console.log("done");
}

//removes error message
function undo_error() {
  var name_error = document.getElementById("error_name");
  var pass_error = document.getElementById("error_pass");
  var username = document.getElementById("name_user");
  username.style.border = "";
  name_error.textContent = "";
  pass_error.textContent = "";
}

//to display error messages
function set_error_email() {
  var name_error = document.getElementById("error_name");
  var username = document.getElementById("name_user");
  name_error.textContent = "*Invalid username or email";
  name_error.style.borderColor = "red";
  username.style.border = "1px solid red";
  var timeout = setTimeout(undo_error, 5000);
}
function set_error_pass() {
  var pass_error = document.getElementById("error_pass");
  pass_error.textContent = "*Invalid password";
  var timeout = setTimeout(undo_error, 5000);
}

var t_u = { user_name: "" };

//checks whether username is present in array or not
function verify_email() {
  var username = document.getElementById("name_user").value;
  for (i = 0; i < users.length; i++) {
    if (username == users[i].u_name) {
      return true;
    }
  }
  set_error_email();
}

//checks if password is correct or not
function verify() {
  var username = document.getElementById("name_user").value;
  var password = document.getElementById("pass_user").value;
  if (verify_email()) {
    for (i = 0; i < users.length; i++) {
      if (username == users[i].u_name && password == users[i].u_password) {
        users[i].status = "active";
        window.location.assign("logged_in_index.html");
        return true;
      } else if (
        username == users[i].u_name &&
        password != users[i].u_password
      ) {
        set_error_pass();
      }
    }
  }
}
//.then catch block

function set_user() {
  var p_icon = document.getElementById("profile");
  for (i = 0; i < users.length; i++) {
    if (users[i].status === "active") {
      t_u.user_name = users[i].u_name;
    }
  }
  p_icon.textContent = t_u.user_name;
}
