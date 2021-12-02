def analize (text):
  counter_words = len(text.split())
  return f"Número de palavras = {counter_words}"

def analize2 (text):
  counter_words = len(text.split())
  char_counter = dict()
  for char in text:
    if char in char_counter:
      char_counter[char] += 1
    else: char_counter[char] = 1  
  return f"Número de letras = {char_counter}"
  
text_to_analize = (
  "Seremos a primeira escolha para quem quer alcançãr profissões "
  "digitais da América latina. No Brasil e no undo, milhares de vagas "
  "criadas anualmente no mercado de tecnologia deixam de ser "
  "preenchidas por falta de pessoas qualificadas. Nós trabalhamos duro "
  "todos os dias para que as pessoas tenham a oportunidade de trilhar "
  "essas carreiras"
)

print(analize(text_to_analize))
print(analize2(text_to_analize))
