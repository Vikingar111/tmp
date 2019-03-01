word = "Roma"
x = 2
for i in range(len(word)) :
    newWord = []
    newWord += (chr(ord(word[i]) + x))
    
    print(word[i])
    i += 1
print(newWord)