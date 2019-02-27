# Simple array
bicycles = ['scott', 'gt', 'bergamont', 'cube', 'specialized']
message = "My first bike was a " + bicycles[1].upper() + "."
print(message)

# change scott > norco
print("Replace")
bicycles[1] = 'norco'
print(bicycles)

# add new one
print("Add new one")
bicycles.append('mogoose')
print(bicycles)

# filling the list (array)
auto = []
auto.append('bmw')
auto.append('vw')
auto.append('toyota')
auto.append('ford')
print(auto)

# insert element
print("insert")
auto.insert((1),'ferrari')
print(auto)

# delete element
print("del")
del auto[4]
print(auto)

# using method pop()
print("pop()")
popped_auto = auto.pop()
print(auto)
print("Last car added was a "+ popped_auto.upper())

# remove method
print("remove() + return popped")
removed = "bmw"
auto.remove(removed)
auto.insert((2),popped_auto)
print(auto)
print("Not used " + removed.upper())

# method sorted()
print("\nSorted list :")
print(sorted(bicycles))
print("\nOriginal list :")
print(bicycles)

# method sort()
print("\nSort() method")
bicycles.sort()

print(bicycles)
bicycles.sort(reverse=True)

print(bicycles)
bicycles.reverse()
print(bicycles)
print("lenght : " + str(len(bicycles)))
