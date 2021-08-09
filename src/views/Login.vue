<template>
  <div class="login-wrap">
    <div class="login-left">
      <span>WELCOME</span>
      <p>
        Today I Learn is.... Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Veritatis laboriosam non consequuntur rerum eligendi obcaecati
        architecto! Harum corporis ipsa, rerum, blanditiis eligendi alias
        corrupti delectus ducimus omnis distinctio dicta quae!
      </p>
    </div>
    <div class="login-right">
      <span>SIGN IN</span>
      <ul class="login-box">
        <li>
          <input type="text" name="id" placeholder="ID" />
        </li>
        <li>
          <input type="password" placeholder="PW" />
        </li>
        <li>
          <input type="checkbox" id="show-pw" />
          <label for="show-pw">Show password</label>
        </li>
        <li class="login">
          <a href="" class="btn-login">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.login-wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1070px;
  height: 660px;
  border-radius: 25px;
  display: flex;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
}

.login-left {
  width: 40%;
  padding: 340px 40px 55px 40px;
  background: #5d65ff;
  color: #e3e3e3;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.login-left span {
  font-size: 45px;
  font-weight: 900;
}

.login-left p {
  font-size: 15px;
  font-weight: 300;
}

.login-right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

.login-right span {
  font-size: 30px;
  font-weight: 900;
  color: #cbcbcb;
}

.login-right .login-box {
  margin-top: 45px;
}

.login-right .login-box li {
  margin-bottom: 10px;
}

.login-right .login-box li.login {
  margin-top: 25px;
}

.login-right .login-box input[type='text'],
.login-right .login-box input[type='password'] {
  border: none;
  width: 440px;
  border-radius: 15px;
  padding: 10px 25px;
  color: #9b9898;
  background: #f9f9f9;
  border: 1px solid transparent;
}

.login-right .login-box input:focus {
  outline: none;
  border: 1px solid #bcbffa;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.2);
}

.login-right .login-box input::placeholder {
  color: #b6b6b6;
}
</style>
