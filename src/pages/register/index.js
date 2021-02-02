import { signUp, saveUser } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Register = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div class='container-login'>
    <div class='box-login'>
     <img src='images/Cinelist.png' class='login-icon'>
      <form class='login'>
        <input class='input-login' id="email" placeholder="E-mail" required>
        <p class='infoText'>Senha de no mínimo 6 caracteres</p>
        <input class='input-login' id="password" type="password" placeholder="Senha" required>
        <input type='password' class='input-login' id='password-confirm' placeholder='Confirmar senha'/>
        <p class="flex-itens" id="password-error"></p>
        <button type='submit' class='button' id='button-register'>Registrar-se</button>
        <p class='infoText marginText'>Ao cadastre-se você concorda com nossos termos de uso.</p>
      </form>
    </div>
  </div>
  `;

  const btnRegister = rootElement.querySelector('#button-register');
  const email = rootElement.querySelector('#email').value;
  const password = rootElement.querySelector('#password').value;
  const confirmPassword = rootElement.querySelector('#password-confirm').value;
  const passwordError = rootElement.querySelector('#password-error');

  const verifyConfirmPassword = () => {
    if (password !== confirmPassword) {
      passwordError.style.color = 'red';
      passwordError.innerHTML = 'Passwords do not match!';
      return false;
    }
    passwordError.innerHTML = '';
    return true;
  };

  confirmPassword.addEventListener('input', verifyConfirmPassword);

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    if (verifyConfirmPassword()) {
      signUp(email, password)
        .then(() => {
          saveUser();
          onNavigate('/allMovies');
        })
        .catch(() => {
          alert('Falha ao realizar o cadastro');
        });
    }
  });

  return rootElement;
};
