Criando um Repositório

1 - Crie uma pasta no computador;

2 - Acesse a pasta;

3 - Inicie o versionamento (git init);

4 - Abra o VSCode (code .);

5 - Crie um arquivo chamado README.md;

6 - Adicione em staging e realize um commit (git add . e git commit -m "mensagem");

7 - Crie uma nova branch com o comando git checkout -b. (git checkout -b adiciona-readme);

8 - Faça alterações no README.md, realize git add . e git commit -m "mensagem";

9 - Retorne para a main e realize o merge (git merge nome-da-branch);

10 - Acesse a main e crie uma branch nova chamada atualiza-readme;

11 - Acesse branch atualiza-readme e crie um arquivo de nome infos.txt;

12 - Adicione as alterações em staging e realize o commit;

13 - Crie uma nova brnach a partir da atualiza-readme com o nome de adiciona-infos;

14 - Acesse a branch adiciona-infos e altere o README.md com o passo a passo de como o versionamento funciona;

15 - Adicione em staging e realize o commit;

16 - Volte para a branch atualiza-readme e faça o merge das alterações realizadas em adiciona-infos;

17 - Retorne para a branch main e realize o merge;