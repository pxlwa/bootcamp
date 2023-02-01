//contact me
function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;

  // prettier-ignore
  if (name == "") {
    alert("Nama harus di isi");
  } else if (email == "") {
    alert("email harus di isi");
  } else if (phone == "") {
    alert("Nomor harus diisi");
  } else if (subject == "") {
    alert("Pilih salah satu subject");
  } else if (description == "") {
    alert("Description harus diisi");
  }

  const defaultEmail = "akbarpalwaramadhanihz@gmail.com";

  let mailTo = document.createElement("a");
  mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${description} tolong hubungi saya di ${phone}`;
  mailTo.click();

  let audience = {
    name,
    email,
    phone,
    subject,
    description,
  };
  console.log(audience);
}

//project
// function getData(){
//   let projectName = document.getElementById("projectName").value;
//   let startDate = document.getElementById("startDate").value;
//   let endDate = document.getElementById("endDate").value;
//   let description = document.getElementById("description").value;
//   let description = document.getElementById("description").value;

// }
