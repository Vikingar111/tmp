string = ['aabbccaabb']
elem_1, elem_2, elem_3, other = 0,0,0,0
for elem in string :
    print(elem)
    for i in elem:
        if i == 'a':
            elem_1 += 1
        if i == 'b':
            elem_2 += 1
        if i == 'c':
            elem_3 += 1
        #else :
            other += 1
    tmp = {'a':elem_1, 'b':elem_2, 'c':elem_3, } #, 'others':other}
    print(tmp)
print("A = " + str(elem_1) + "\n" +
        "B = " + str(elem_2) + "\n" +
        "C = " + str(elem_3) + "\n"
        )

print(tmp['a'])
print(tmp['b'])
print(tmp['c'])

