# Aplicação para monitoramento de URLs.

<br />

<div align="center">A aplicação acessa as URLs cadastradas e tira print de 1 em 1 minuto.</div>

<br />

## Sobre a aplicação

A aplicação foi desenvolvida em **Node.js** e **React.js** com **Redux**, utilizando o boilerplate [react-redux-boilerplate](https://github.com/flexdinesh/react-redux-boilerplate) para inicialização da aplicação, um banco de dados **SQLite** em arquivo com o [UeberDB](https://github.com/ether/ueberDB) e o **Webdriver** [Selenium](https://www.selenium.dev/documentation/en/), além de ser executado com **Docker**.


## Estrutura do projeto

Os pincipais componentes do projeto estão em:

- _./app_ - Camada do **front-end**
- _./server/api_ - Camada do **back-end**

## Execução

1. Clone este projeto usando: `git clone https://github.com/rodrigof23/monitoringURLs.git`
2. Acesse o diretório onde o projeto foi clonado.<br />
3. Faça a instalação do Docker ou similar.<br />
4. Execute o comando: `sudo docker build -t monitoring-urls --network=host .`<br />
5. Execute o comando: `sudo docker run -d -p 4444:4444 -p 7900:7900 --shm-size="2g" selenium/standalone-firefox:4.0.0-rc-1-prerelease-20210713`<br />
6. Execute o comando: `sudo docker run --security-opt label=disable --security-opt=seccomp=unconfined -d --name monitoring-urls -p 3000:3000 monitoring-urls`<br />
7. Acesse a URL: `http://localhost:3000`.

## Desenvolvedor

Criado por [Rodrigo Freitas](https://www.linkedin.com/in/rodrigo-freitas-667b4695) em 17/07/2021.
