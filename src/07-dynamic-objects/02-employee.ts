// dry, трудность добавления других свойств
interface Employee {
    userId: string
    firstName: string
    lastName: string
    recentFiles: string[]
    isMarried?: boolean
}

interface EmployeeWithBirthDate {
    userId: string
    firstName: string
    lastName: string
    recentFiles: string[]
    isMarried?: boolean
    birthDate: Date
}

interface IEmployeeWithBirthDate extends Person {
    birth: Date
}

type TEmployeeWithBirthDate = Person & { birth: Date }


// нового сотрудника можно связать типами с сотрудником
interface newEmployee {
    userId: string
    recentFiles: string[]
}

interface newEmployee {
    userId: Employee['userId']
    recentFiles: Employee['recentFiles']
}

type newEmployeeType = {
    [k in 'userId' | 'recentFiles']: Employee[k]
}


// женатый сотрудник с id
type PickAnalog<T, K extends keyof T> = { [k in K]: T[k]}

type marriedEmployee = Pick<Employee, 'userId' | 'isMarried'>


// "необязательный сотрудник"
type UnknownEmployee = {
    [k in keyof Employee]?: Employee[k]
}

type UnknownEmployeePartial = Partial<Employee>


// тип совпадает с формой значения
const employeeID = {
    userId: '1234'
}

type userId = typeof employeeID


// тип, возвращаемый функцией
function getEmployeeInfo(userId: string) {
    return {
        userId,
        age: '22',
        weight: '70',
        height: 180,
    }
}

type employeeInfo = ReturnType<typeof getEmployeeInfo>
