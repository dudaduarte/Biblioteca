# Validador de CPF v.1.0.0

**Esta biblioteca destina-se à verificação de números de CPF, retornando true para um CPF válido, e false para um inválido.**
Na versão atual a biblioteca verifica números de CPF tanto em números quanto em string. O usuário também pode inserir o número de CPF com pontos e traço, que a verificação acontece normalmente.

## Como instalar:

```shell

$  npm install lib-cpf

```

## Como utilizar:

### Validando um CPF:

```node

> const validate = require("../lib/lib-cpf");
> validate("814.369.750-93")
> // returns true

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: verificação da validade de números de CPF.
- aceitando input de números e strings.
