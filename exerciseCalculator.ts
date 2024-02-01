interface Exercise {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number;
}


function calculateExercises(target: number, ...hours: number[]): Exercise {


    const periodLength: number = hours.length;
    const trainingDays: number = (hours.filter(day => day > 0)).length;
    const average: number = hours.reduce((accumulator, currentValue) => accumulator + currentValue) / periodLength;
    const success: boolean = average > target;

    let rating: number;
    if (average / target > 2 / 3) {
        rating = 3;
    } else if (average / target < 1 / 3) {
        rating = 1;
    } else { rating = 2; }


    let ratingDescription: string;
    switch (rating) {
        case 1:
            ratingDescription = "Do better!";
            break;
        case 2:
            ratingDescription = "Close, try a little harder.";
            break;
        case 3:
            ratingDescription = "You're close to your goal!";
            break;
        default:
            ratingDescription = "Unknown rating";
    }

    const result: Exercise = {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: success,
        rating: rating,
        ratingDescription: ratingDescription,
        target: target,
        average: average
    };
    console.log(result);

    return result;
}


const target: number = Number(process.argv[2]);
const hours: number[] = (process.argv.slice(3)).map(item => Number(item));



calculateExercises(target, ...hours);
