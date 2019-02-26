package main

import "fmt"

func main() {
	fmt.Println(isPalindrome("wait"))
	fmt.Println(isPalindrome("level"))
	fmt.Println(isPalindrome("as"))
	fmt.Println(isPalindrome("zz"))
}
func isPalindrome(s string) bool {
	for i := 0; i < len(s)/2; i++ {
		if s[i] != s[len(s)-i-1] {
			return false
		}
	}
	return true
}
