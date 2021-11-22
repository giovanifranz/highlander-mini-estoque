# Highlander Mini Estoque

Mini App criado a partir de conteúdos das NLW e Ignite da Rocketseat, foi utilizado o que foi ensinado na NLW Together e no capítulo II e III do Ignite.


Para configurar o Mini Estoque é necessário uma conta no Firebase e preencher o .env.local com suas configurações.
Também é necessário uma conta no sendGrid para envio automatizado de e-mails via API.

Depois de configuradas as váriaveis de ambiente: 

```bash
npm install
npm run dev
```

### Implementado

- A partir do Mini Estoque você pode logar com o google
- Depois de logado você pode configurar seu estoque 
- Ao criar estoque você recebe um e-mail com o ID do estoque e QRcode correspondente
- Pode acessar seu estoque e adicionar produtos
- Todos os produtos também são acessíveis via API route (ainda sem a necessidade de autenticação)

### Falta Implementar

- Implementar regras de leitura e escrita no firebase
- Remoção de produtos
- Autenticação dentro da API
- Carregamento automático do estoque se préviamente Logado
- Carregamento automático do estoque caso já exista estoque registrado na conta google
- Responsividade
- Implementar nova tela para login para acessar Dashboard via qrCode ou código
- Melhorar layout da página de Dashboard 
- Impelemtar novos pontos de login e logout no App

