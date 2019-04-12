### Estória

#### Criar um softform
Quando o **Usuário** entrar no site, vamos _exibir_, progressivamente, as três **Etapas** do funil:
1. **Dados Pessoais**: o usuário deve _informar_ qual é o seu **nome** e **email**
2. **Pedido de Empréstimo**: o usuário deve _informar_ qual é o **valor** e as **parcelas** do emprestimo
3. **Criação da Senha**: o o usuário deve _informar_ sua **senha**

Ao completar todas as etapas, uma mensagem que foi bem sucedido deve aparecer.

### Experiência

```

-----------------------------------------------------------
|                     Pré-Cadastro                        |  
|                    Dados Pessoais                       |
|     usuario: [---------] senha: [------] [enviar]       |
|                  Valor do Emprestimo                    |
|     valor: [---------] parcelas: [------] [enviar]      |
|                         Senha                           |
|     senha: [--------] confirme: [-------] [enviar]      |
|                  Enviado com sucesso!                   |
-----------------------------------------------------------

```

#### Premissas da experiência:

* As etapas aparecem progressivamente
* A etapa anterior fica desabilitada, para evitar alterações
* A mensagem de sucesso só aparece ao final

### Componentes:

```react
<App />
    <Home />
        <HomeTitle />
        <StepList />
            <PersonalData />
            <LoanRequest />
            <Password />
        <MessageOk />
```
