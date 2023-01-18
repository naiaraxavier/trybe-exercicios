#Exercicio 1
mkdir exercicio-modulo01-secao01-dia03-git
ls

#Exercicio 2
cd exercicio-modulo01-secao01-dia03-git
git status

#Exercicio 3
git init

#Exercicio 4
 code .
 
 #Exercicio 5
touch README.md
git status

#Exercicio 6
#Realizado as alterações no VSCode

#Exercicio 7
git add .
git commit -m "Adicionando o README.md"

#Exercicio 8
git checkout -b adiciona-readme

#Exercicio 9
#Realizado as alterações no VSCode

#Exercicio 10
git add .
git commit -m "Alterando o README"

#Exercicio 11
git checkout main
git merge adiciona-readme
git status

#Exercicio 12
git checkout -b atualiza-readme

#Exercicio 13
touch infos.txt

#Exercicio 14
#Realizado as alterações no VSCode

#Exercicio 15
git add .
git commit -m "Criando uma nova branch e adicionando o arquivo infos.txt"
git add .
git commit -m "Exercício 13 - Adicionando nome e sobrenome no arquivo"
git checkout -b adiciona-infos
git add .
git commit -m "exercicio 15 - adicionando alterações no README"
git status

#Exercicio 16
git checkout atualiza-readme
git merge adiciona-infos

#Exercicio 17
git checkout main
git merge atualiza-readme
git status
