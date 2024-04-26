import "./reset.scss"

@printInfo
class Person {
  name = "zero"
  constructor() {
    console.log("Init the Person class")
  }
}

function printInfo(value: Function, context: ClassDecoratorContext) {
  console.log(value)
  console.log(context)

  context.addInitializer(() => {
    console.log("Init class" + context.name)
  })
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const person = new Person()

await delay(2000)

console.log(person)
