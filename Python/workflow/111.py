arr = ")()()("
N = len(arr)
print(arr)
for i in range(N-1):

    if i == ")" :
        print("First element is " + i)
        break
    elif i == "(" :
        for j in range(i+1, N):
            if arr[i] == arr[j]:
                print("Есть одинаковые")
                quit()
print("Все элементы уникальны")