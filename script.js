const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const login = document.getElementById('login');
const signUp = document.getElementById('signUp');

// ---------------VAR LOGIN------------------//
const nameLogin = document.getElementById('nameLogin');
const pwLogin = document.getElementById('pwLogin');

// ---------------VAR SIGNUP------------------//
const nameSign = document.getElementById('nameSign');
const pwSign1 = document.getElementById('pwSign1');
const pwSign2 = document.getElementById('pwSign2');

// ---------------VAR KOSONG------------------//
const kosong = document.getElementById('kosong');
const kosongTeks = document.getElementById('kosongTeks');

let hal = true;

login.style.display = 'grid';
signUp.style.display = 'none';

function halaman() {
  if(hal == true) {
    login.style.display = 'none';
    signUp.style.display = 'grid';
    nameLogin.value = "";
    pwLogin.value = "";
    hal = false;
  } else {
    login.style.display = 'grid';
    signUp.style.display = 'none';
    hal = true;
  }
  console.log(hal);
}

function ahref() {
  halaman();
}

// ----------------BUTTON CLOSE-----------------//
function out() {
  kosong.style.display = "none";
  
  nameLogin.value = "";
  pwLogin.value = "";
}

// ----------------BUTTON LOGIN-----------------//
btnLogin.addEventListener('click', () => {
  const dataNama = nameLogin.value.trim();
  const dataPw = pwLogin.value.trim();
  
  const daftarNama = JSON.parse(localStorage.getItem('username')) || [];
  const daftarPw = JSON.parse(localStorage.getItem('password')) || [];
  
  const index = daftarNama.indexOf(dataNama);
  
  if(index !== -1 && daftarPw[index] === dataPw) {
    kosong.style.display = "grid";
    kosongTeks.textContent = "Selamat datang " + daftarNama[index];
  }else{
    alert('data tidak ditemukan!');
  }
});

// ----------------BUTTON SIGNUP-----------------//
btnSignUp.addEventListener('click', () => {
  const signName = nameSign.value.trim();
  const signPw1 = pwSign1.value.trim();
  const signPw2 = pwSign2.value.trim();
  
  const daftarNamaa = JSON.parse(localStorage.getItem('username')) || [];
  const daftarPww = JSON.parse(localStorage.getItem('password')) || [];
  
  if (daftarNamaa.includes(signName)) {
    alert('Data Sudah Ada! Harap isi dengan username yang lain');
    
  } else if (signPw1 !== signPw2) {
    alert('password tidak sama!');
    
  } else if (signName == "" || signPw1 == "" || signPw2 == "") {
    alert('Harap isi kolom yang kosong!');

  } else {
    daftarNamaa.push(signName);
    daftarPww.push(signPw2);
    
    localStorage.setItem('username', JSON.stringify(daftarNamaa));
    localStorage.setItem('password', JSON.stringify(daftarPww));
    
    alert('selamat datang ' + signName + ' di akun barumu!');
    
    nameSign.value = "";
    pwSign1.value = "";
    pwSign2.value = "";
    
    halaman();
  }
});

function tampilinData() {
  console.log(JSON.parse(localStorage.getItem('username')));
  console.log(JSON.parse(localStorage.getItem('password')));
}
//panggil fungsi tampilinData() di bawah ini...//
tampilinData()