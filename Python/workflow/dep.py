class Employee(object) :
    def __init__(self, fst_name, lst_name, salary, experiance, manager) :
        """Employee description"""
        self.fst_name = fst_name
        self.lst_name = lst_name    
        self.experiance = experiance
        self.manager = manager
        self.salary = salary
    def employee_info(self):
        """Employee full description"""
        info = self.fst_name + " " + self.lst_name + "\n" + str(self.experiance) + " " + str(self.salary) + "\nLine manager is : " + self.manager
        return info.title()
    def update_salary(self) :
        if 5 > self.experiance >= 2 :
            self.salary += 300
            print("Salary with bonus is : " + str(self.salary) + "$")
        elif self.experiance >= 5 :
            self.salary = (self.salary*1.2) + 500
            print("Salary with bonus is : " + str(self.salary) + "$")
        else:
            print("Your salary is : " + str(self.salary) + "$")

new_employee = Employee("Vasya", "Vasin", 1000, 1, "Petya")
print(new_employee.employee_info())
print(new_employee.update_salary())