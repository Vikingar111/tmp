#https://server.179.ru/tasks/python/2014b1/16-lists3.html
a = []
k = 1 # просто начальное значение, может быть любым
for row in range(3): # 3 строк
    a.append([]) # создаем пустую строку
    for c in range(3): # в каждой строке - 3 элементов
        a[row].append(k) # добавляем очередной элемент в строку
        k += 1 # увеличиваем значение счетчика

for i in range(len(a)):
    for j in range(len(a[i])):
        print(a[i][j], end = ' ')
    print()
print("\n")
for i in range(len(a)):
    for j in range(len(a[i])):
        print(a[j][i], end = ' ')
    print()
    

