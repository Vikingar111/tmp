class Department():
    team = []
    

class Employee(object):
    def __init__(self, name, exp, salary, manager = None, dept=None):
        self.name = name
        self.exp = exp
        self.salary = salary
        self.manager = manager
        self.dept = dept
        self.employees = []
        
        self.add_employees()

    def add_employees(self):
        if self.manager:
            self.manager.employees.append(self)


class Manager(Employee):
    def __init__(self, name, exp, salary, manager = None, dept=None):
        Employee.__init__(self, name, exp, salary, manager, dept)
        Department.team.append(self)

    def count_salary(self):
        qty = len(self.employees)
        sal = self.salary*qty
        return sal

class ItEmployee(Employee):
    def __init__(self, name, exp, salary, manager = None, dept=None):
        Employee.__init__(self, name, exp, salary, manager, dept)
        self.manager = manager
    
    def fgdfg(self):
        pass
    



man1 = Manager('fdsf', 'fsdfs', 50)

print(man1.manager)

it1 = ItEmployee('fdsfs', 'fsdfsd', '60', manager=man1)
it2 = ItEmployee('fdsfs', 'fsdfsd', '60', manager=man1)
it3 = ItEmployee('fdsfs', 'fsdfsd', '60', manager=man1)

print(man1.employees[0].manager.name)

print(man1.count_salary())