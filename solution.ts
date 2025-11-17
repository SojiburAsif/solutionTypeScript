
const formatValue = (value: string | number | boolean) => {
    if (typeof value == "string") {
        const answer = value.toUpperCase()
        return answer
    } else if (typeof value === "number") {
        const multiplied = value * 10
        return multiplied
    }
    else {
        return !value
    }
}

const getLength = <T>(value: T) => {
    if (typeof value === "string") {
        return value.length
    }
    else if (Array.isArray(value)) {
        return value.length
    }
}


class Person {
    Name: string;
    age: number;
    constructor(Name: string, age: number) {
        this.Name = Name;
        this.age = age
    }
    getDeatils() {
        return `'Name: ${this.Name}, Age: ${this.age}'`
    }
}
const person1 = new Person('Sojibur Asif', 20);
console.log(person1.getDeatils());
const person2 = new Person('Tabassum', 18);
console.log(person2.getDeatils());




const filterByRating = (books: { title: string, rating: number }[]) => {
    const plusReating = books.filter((user) => user.rating >= 4);
    return plusReating
}



const filterActiveUsers = (user: { id: number, name: string, email: string, isActive: boolean }[]) => {
    const ActiveUsers = user.filter((users) => users.isActive === true)
    return ActiveUsers
}




interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`);
}




const getUniqueValues = (array1: number[], array2: number[]): number[] => {
    const res: number[] = [];
    const totalArr = [...array1, ...array2];

    for (let i = 0; i < totalArr.length; i++) {
        let f = false;

        for (let j = 0; j < res.length; j++) {
            if (res[j] === totalArr[i]) {
                f = true;
                break;
            }
        }
        if (!f) {
            res[res.length] = totalArr[i]!;
        }
    }

    return res;
};




const calculateTotalPrice = (products: { name: string; price: number; quantity: number; discount?: number }[]) => {
    const Total = products.map((userPrice) => {
        let TotalPrice = userPrice.price * userPrice.quantity
        if (userPrice.discount) {
            TotalPrice = TotalPrice - (TotalPrice * userPrice.discount / 100)
            return TotalPrice
        }
        return TotalPrice;
    })
    const finalTotal = Total.reduce((accu, value) => accu + value, 0);
    return finalTotal;
}

