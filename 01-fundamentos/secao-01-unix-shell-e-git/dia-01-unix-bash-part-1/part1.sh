# Exercício 1
mkdir unix_tests
ls
cd unix_tests

# Exercício 2
touch trybe.txt
ls

# Exercício 3
cp trybe.txt trybe_backup.txt
ls

# Exercício 4
mv trybe.txt trybe-renomeado.txt
ls
cd ..
ls
cd unix_tests
ls

# Exercício 5
mkdir backup
ls

# Exercício 6
mv trybe_backup.txt backup/
ls
cd backup
ls

# Exercício 7
cd ..
mkdir backup2
ls

# Exercício 8
mv ./backup/trybe_backup.txt backup2/
cd backup2
ls
cd ..
ls

# Exercício 9
rmdir backup
ls

# Exercício 10
mv backup2 backup/
ls

# Exercício 11
pwd
ls -l

# Exercício 12
rm -rf backup
ls

# Exercício 13
clear

# Exercício 14
touch skills.txt

# Exercício 15
head -5 skills.txt

# Exercício 16
tail -4 skills.txt

# Exercício 17
rm *.txt

# Exercícios de manipulação e busca
# Exercício 1
mkdir unix_tests_search
cd unix_tests_search
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
ls

# Exercício 1
cat countries.txt

# Exercício 2
less countries.txt

# Exercício 3
# /Zambia

# Exercício 4
grep Brazil countries.txt

# Exercício 5
grep -i brazil countries.txt

# Exercício 6
cat > phrases.txt
cat phrases.txt

# Exercício 7
grep -v fox phrases.txt

# Exercício 8
wc -w phrases.txt

# Exercício 9
wc -l phrases.txt

# Exercício 10
touch empty. tbt empty.pdf

# Exercício 11
ls
ls -l

# Exercício 12
ls -ls *txt

# Exercício 13
ls -ls *t?t

# Exercício 14
man ls





