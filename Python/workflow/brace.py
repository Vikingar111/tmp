brace = '())(()'
count = 0
lenght = len(brace)
symbol = ""

if brace[0] == ')': # проварека на наличие закрытой скобки в начале
    print("First is )")
    quit()
if brace[-1] == '(': # проверка на наличие открытой скобки в конце
    print("Last is (")
    quit()
if lenght % 2 != 0 : # проверка на парность
    print("odd array : " + str(lenght) + " elements")
    quit()

for i in range(lenght) :
    if symbol == "(":
        count += 1
    elif symbol == ")":
        count = count - 1

if count != 0 :
    print(" Not OK")
else:
    print("OK")

    