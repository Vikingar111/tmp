palindrome_check = ["level", "word", "LOL", "()()()", "())("]

def palindrom(tmp) :
    print("\nPalindrome checking : \n")
    tmp = []
    for word in palindrome_check :
        if word == word[::-1] :
            print(word + " : palindrome - True")
        else : 
            print(word + " : palindrome - False")

def revers(tmp) :
    print("\nWords reverse : \n")
    tmp = []
    for word in palindrome_check :
        s = word[::-1]
        print(word + " = " + s)

#palindrom(palindrome_check)
#revers(palindrome_check)