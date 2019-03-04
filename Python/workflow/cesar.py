palindrome_check = ["level", "word", "LOL", "()()()", "())("]
text_for_cesar = "Some decrypdet text"

def cesar_enc(text, shift=3) :
    newWord = ""
    for l in range(len(text)) :
        newLit = (ord(text[l]))+shift
        newWord += (chr(newLit))
    return newWord

def cesar_dec(newWord, shift=3) :
    oldWord = ""
    for l in range(len(newWord)) :
        newLit = (ord(newWord[l]))-shift
        oldWord += (chr(newLit))
    return print("Decryption : " + oldWord)

result = cesar_enc(text_for_cesar)
print("\nCaesar cipher\n"+ "Encryption : " + result)

cesar_dec(cesar_enc(text_for_cesar))