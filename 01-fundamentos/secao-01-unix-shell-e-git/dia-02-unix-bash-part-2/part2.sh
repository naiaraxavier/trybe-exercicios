# Exercício 1
mkdir unix_testes_skills
ls
cd unix_testes_skills

# Exercício 2
cat > skills2.txt
cat skills2.txt

# Exercício 3
cat >> skills2.txt
sort skills2.txt

# Exercício 4
wc -l skills2.txt

# Exercício 5
sort < skills2.txt | head -n 3 > top_skills.txt
ls
cat top_skills.txt

# Exercício 6
cat > phrases2.txt
ls
cat phrases2.txt

# Exercício 7
wc -l "br" phrases2.txt

# Exercício 8
grep -v br phrases2.txt| wc -l

# Exercício 9
cat >> phrases2.txt

# Exercício 10
cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things.txt

# Exercício 11
sort bunch_of_things.txt -o bunch_of_things.txt


# Exercícios Permissões

# Exercício 1
mkdir unix_tests_permissions
ls
cd unix_tests_permissions

# Exercício 2
ls -l

# Exercício 3
touch arquivo_teste.txt
ls
ls -l

# Exercício 4
chmod a+rw arquivo_teste.txt
ls -l

# Exercício 5
chmod a-w arquivo_teste.txt
ls -l

# Exercício 6
chmod 644 arquivo_teste.txt
ls -l



# Exercícios sobre processo e jobs
# Exercício 5
ps

# Exercício 5
sleep 30 &
ps

# Exercício 5
kill 45959

# Exercício 5
sleep 30
# ctrl z
bg

# Exercício 5
sleep 300 &

# Exercício 5
sleep 200
# ctrl z
sleep 100
# ctrl z

# Exercício 5
jobs
fg
# ctrl z

# Exercício 5
killall sleep
jobs
ps




