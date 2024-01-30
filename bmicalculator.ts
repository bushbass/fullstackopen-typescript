function calculateBmi(height: number, weight: number) {

    const bmi: number = (weight / (height * height) * 100)
    const text: string = 'Normal'
    return (`${text} ${bmi}`)
}

const height: number = Number(process.argv[2])
const weight: number = Number(process.argv[3])

console.log(calculateBmi(height, weight))
