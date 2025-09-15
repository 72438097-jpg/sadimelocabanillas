// Mostrar secciones
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => {
    sec.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}

// Mostrar archivo subido
function mostrarArchivo(num) {
  const input = document.getElementById(`file-${num}`);
  const output = document.getElementById(`archivo-${num}`);
  if (input.files.length > 0) {
    output.textContent = "Subido: " + input.files[0].name;
  } else {
    output.textContent = "Ningún archivo subido";
  }
}

// Login administrador
function login(event) {
  event.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('login-msg');

  if (user === "admin" && pass === "password123") {
    msg.style.color = "green";
    msg.textContent = "Bienvenido, acceso concedido ✅";
  } else {
    msg.style.color = "red";
    msg.textContent = "Usuario o contraseña incorrectos ❌";
  }
  return false;
}
// Mostrar secciones
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => {
    sec.classList.remove('activa');
  });
  document.getElementById(id).classList.add('activa');
}

// Mostrar archivo subido
function mostrarArchivo(num) {
  const input = document.getElementById(`file-${num}`);
  const output = document.getElementById(`archivo-${num}`);
  if (input.files.length > 0) {
    output.textContent = "Subido: " + input.files[0].name;
  } else {
    output.textContent = "Ningún archivo subido";
  }
}

// Login administrador
function login(event) {
  event.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('login-msg');

  if (user === "admin" && pass === "password123") {
    msg.style.color = "green";
    msg.textContent = "Bienvenido, acceso concedido ✅";
    
    // Redirigir al panel de administración
    setTimeout(() => {
      mostrarSeccion('admin-panel');
    }, 1000);
  } else {
    msg.style.color = "red";
    msg.textContent = "Usuario o contraseña incorrectos ❌";
  }
  return false;
}
