# Ignite-NodeJs-Project4

## Legendas

**RF** => Requisitos funcionais

**RNF** => Requisitos não funcionais

**RN** => Regra de negócio


## Cadastro de carro

**RF** 
* Deve ser possível um novo Carro
* Deve ser possível listar todas as Categorias

**RNF** 

**RN** 
* Não deve ser possível cadastrar um carro com uma placa já existe.
* Não deve ser possível alterar a placa de um carro.
* O carro deve ser cadastrado com disponibilidade por padrão.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

## Lisgagem de carro

**RF** 
* Deve ser possível listar todos os carros disponíveis
* Deve ser possível listar todos os carros disponíveis pelo noma da categoria
* Deve ser possível listar todos os carros disponíveis pelo noma da marca
* Deve ser possível listar todos os carros disponíveis pelo noma do carro

**RNF**

**RN**
* O usuário não precisa estar logado no sistema.

## Cadastro de Especificação no carro

**RF**
* Deve ser possível cadastrar uma especificação para um carro
* Deve ser possível listar todas as especificações
* Deve ser possível listar todos os carros

**RNF**

**RN**
* Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
* Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

## Cadastro de Imagens do Carro

**RF**
* Deve ser possível cadastrar a imagem do carro 

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
* O usuário responsável pelo cadastro deve ser um usuário administrador.

## Aluguel de Carro

**RF**
* Deve ser possível cadastrar um aluguel

**RNF**

**RN**
* O aluguel deve ter duração mínima de 24 horas
* Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário
* Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro