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


