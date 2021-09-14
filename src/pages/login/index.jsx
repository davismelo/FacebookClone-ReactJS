import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function LoginScreen() {
  return (
    <div className="container">
      <div className="text-side">
        <h1>Facebook</h1>
      </div>
      <div className="form-container">
        <form action="" method="post">
          <Input type="email" placeholder="Email ou telefone" />
          <Input type="password" placeholder="Senha" />
          <Button>Entrar</Button>
          <Button>Criar nova conta</Button>
        </form>
      </div>
    </div>
  );
}
