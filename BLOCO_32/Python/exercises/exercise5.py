# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

razao = 1/3 # razao do tamanho da parede por litro de tinta
qtd_por_latas = 18 # qtd de litros por lata
valor_lata = 80 # valor da lata em reais

def qtd_tintas (tamanho_parede_em_metros):
  qtd_de_tinta_necessaria = tamanho_parede_em_metros * razao
  numero_de_latas = qtd_de_tinta_necessaria / qtd_por_latas
  return numero_de_latas * valor_lata

print(qtd_tintas(54))