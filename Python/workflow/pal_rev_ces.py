
palindrome_check = ["level", "word", "LOL", "()()()", "())("]
text_for_cesar = "Some decrypdet text"

def palindrom(tmp) :
    print("\nPalindrome checking : \n")
    #tmp = []
    for word in palindrome_check :
        if word == word[::-1] :
            print(word + " : palindrome - True")
        else : 
            print(word + " : palindrome - False")

def revers(tmp) :
    print("\nWords reverse : \n")
    #tmp = []
    for word in palindrome_check :
        s = word[::-1]
        print(word + " = " + s)

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

palindrom(palindrome_check)
revers(palindrome_check)
result = cesar_enc(text_for_cesar)
print("\nCaesar cipher\n"+ "Encryption : " + result)

cesar_dec(cesar_enc(text_for_cesar))
