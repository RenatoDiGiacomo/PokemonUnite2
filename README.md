# 2025 Base Vite React

Este é um template base para projetos simples utilizando Vite e React. Ele foi criado para facilitar o início de novos projetos, fornecendo uma estrutura básica e pronta para uso.

## Requisitos

- Node.js (versão 20.10.0 ou superior)
- pnpm (versão 9.12.13 ou superior)
- Docker (versão 26.1.4 ou superior) ou Docker Desktop instalado

### Dica

É recomendado utilizar o `Vs Code` como editor de código para esse projeto, para utilizar ao máximo as funcionalidades e as extensões que facilitam o desenvolvimento que estão recomendadas para esse projeto.

## Design System

Este projeto foi desenvolvido utilizando os componentes do Design System `ISTIC UI`, onde a documentação dos componentes disponíveis está no link abaixo:

(https://frontdesignsystem.azurewebsites.net/?path=/docs/istic-ui-introdu%C3%A7%C3%A3o--documentation)[https://frontdesignsystem.azurewebsites.net/?path=/docs/istic-ui-introdu%C3%A7%C3%A3o--documentation]

## Passo a Passo para Execução do Projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/istic-sp/2025-base-vite-front-react.git
```

2. **Navegue até o diretório do projeto:**

```bash
cd 2025-base-vite-front-react
```

3. **Instale as dependências com o gerenciador de dependências pnpm:**

Com pnpm:

```bash
pnpm install
```

Link para a documentação do pnpm: [https://pnpm.io/pt/](https://pnpm.io/pt/)

4. **Execute o projeto:**

Com pnpm:

```bash
pnpm dev
```

5. **Abra o navegador e acesse:**

```
http://localhost:3000
```

### Dica

Com o projeto rodando, você pode executar o projeto no Vs Code com as teclas `CTRL + F5`, e pode utilizar as ferramentas do editor como por exemplo o debug.

## Estrutura do Projeto

- `src/`: Contém o código fonte do projeto.
- `src/vite-env.d.ts`: Arquivo de definição dos tipos e declaração das variáveis de ambiente.
- `src/assets`: Contém os arquivos estáticos por exemplo imagens, fontes e arquivos json.
- `src/features`: Contém os arquivos core da aplicação, divididos por pastas para cada funcionalidade.
- `src/settings`: Contém os arquivos de configuração de bibliotecas de terceiras, como o axios por exemplo.
- `src/shared`: Contém os arquivos e componentes compartilhados por toda a aplicação.
- `public/`: Contém os arquivos públicos do site como o favicon por exemplo.
- `index.html`: Arquivo HTML principal.
- `.env.example`: Estrutura base do arquivo `.env` do projeto.
- `vite.config.js`: Configuração do Vite.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie uma branch para sua feature ou correção, e envie um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
