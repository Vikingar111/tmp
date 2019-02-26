package main

import "fmt"

func main() {
	var a = [4]int{1, 2, 3, 4}
	var sum int

	for _, value := range a {
		sum = sum + value
	}
	var multy = 1

	for _, value := range a {
		multy = multy * value
	}
	fmt.Println("array :", a, "Summ =", sum, "Multiply =", multy)
}
