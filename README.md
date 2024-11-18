# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# Velocit.QR

## Projeto 2

## Integrantes: <a href="/">Wilson José Testoni Junior</a>, <a href="/">Garbriel ítalo da Silva Lima</a>, <a href="/">Cleiton Lima da Silva</a>, <a href="/">Matheus Adaniya Santiago</a>, <a href="/">Amanda Ferreira Nunes Silva</a>, <a href="/">Ricardo Maia Chingotti</a>, <a href="/">Gustavo Minoru Miyahara</a>, <a href="/">Victor Malzone Tonioli</a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/victorbarq/">Victor Bruno Alexander Rosetti de Quiroz</a>, <a href="https://www.linkedin.com/in/lucymari/">Lucy Mari Tabuti</a>, <a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/">Eduardo Savino Gomes</a>, <a href="https://www.linkedin.com/in/edsonbarbero/">Edson Barbero</a>, <a href="https://www.linkedin.com/in/aimarlopes/">Aimar Martins Lopes</a>

## Descrição

<p align="center">
  <img src="imagens/VelocitQR-logo.png" alt="Logo">
</p>

<b>Velocit.QR</b> é uma solução inovadora que conecta fabricantes e oficinas, simplificando a gestão de garantias de autopeças.
<br><br>
Por meio de QR codes, fabricantes cadastram informações detalhadas das peças, enquanto oficinas acessam dados e iniciam solicitações em poucos cliques. A ferramenta digitaliza todo o fluxo de garantia, eliminando burocracias, reduzindo erros e otimizando o tempo de resposta com praticidade e eficiência.
<br><br>

## 🛠 Estrutura de pastas

-Raiz<br>
|<br>
|-->documentos<br>
  &emsp;|-->Cibersegurança<br>
  &emsp;|Criptografia_md5.pdf<br>
  &emsp;|-->Gestão_de_Projetos_de_Software<br>
  &emsp;|PlanodeProjeto_VelocitQR.xlsx<br>
  &emsp;|ProjectCharter_VelocitQR.pdf<br>
  &emsp;|-->Inteligência_Artificial<br>
  &emsp;|autopecas_motor_planilha.xlsx<br>
  &emsp;|AlgoritmoDeOtimizacao.ipynb<br>
  &emsp;|Algoritmo_Fuzzy.ipynb<br>
  &emsp;|Algoritmo_ML.ipynb<br>
|-->imagens<br>
  &emsp;|VelocitQR-logo.png<br>
|-->src<br>
  &emsp;|-->Backend<br>
  &emsp;|-->Frontend<br>
|readme.md<br>

A pasta raiz contem dois arquivos que devem ser alterados:

<b>README.MD</b>: Arquivo que serve como guia e explicação geral sobre seu projeto. O mesmo que você está lendo agora.

Há também 3 pastas que seguem da seguinte forma:

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.

## 💻 Configuração para Desenvolvimento

### Frontend (Local)

Para o funcionamento local do frontend, clone o projeto e navegue para a pasta frontend:

```sh
git clone https://github.com/2024-2-NADS4/Projeto2.git
cd src/frontend
```

Após estar na pasta frontend, instale as dependênias, e inicie o projeto

```sh
npm install
npm run dev
```

### Backend (Local)

Para o funcionamento local do backend, clone o projeto e navegue para a pasta backend:

```sh
git clone https://github.com/2024-2-NADS4/Projeto2.git
cd src/backend
```

Para instalar as dependências você pode usar o comando pip no terminal. Siga estes passos:

Certifique-se de estar no diretório onde o arquivo requirements.txt está localizado.
Execute o seguinte comando no terminal:

```sh
pip install -r requirements.txt
```
Isso instalará todas as bibliotecas especificadas no arquivo requirements.txt e as versões correspondentes, se especificadas.

```sh
numpy==1.23.5
pandas>=1.5.0
scikit-learn
flask<3.0
```

Após a instalação das dependências, inicio o servidor:

```sh
python app.py
```

## 🎓 Referências

Aqui estão as referências usadas no projeto.

1. <https://vercel.com/>
2. <https://react.dev/>
3. <https://www.sqlite.org/>
4. <https://flask.palletsprojects.com/en/stable/>
