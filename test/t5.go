package main

import "fmt"

const size = 5

var n = [size]int{2, 6, 13, 0, 1}

func main() {

	fmt.Printf(histogram("%s\n"))
}

func histogram(tmp string) string {
	for i := 0; i <= size-1; i++ {
		fmt.Printf("%d", i, n[i])
		for j := 0; j <= n[i]-1; j++ {
			fmt.Printf("%c", '$')
		}
		fmt.Println()
	}
	return tmp
}
