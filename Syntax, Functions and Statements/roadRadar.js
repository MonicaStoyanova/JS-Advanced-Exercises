function roadRadar(speed, area) {

    let limit = 0;
    let stat = '';

    switch (area) {

        case 'motorway':
            limit = 130;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let difference = Math.abs(limit - speed);
                if (difference <= 20) {
                    stat = 'speeding';
                } else if (difference <= 40) {
                    stat = 'excessive speeding';
                } else {
                    stat = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${stat}`);
            }

            break;

        case 'interstate':
            limit = 90;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let difference = Math.abs(limit - speed);
                if (difference <= 20) {
                    stat = 'speeding';
                } else if (difference <= 40) {
                    stat = 'excessive speeding';
                } else {
                    stat = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${stat}`);
            }

            break;

        case 'city':
            limit = 50;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let difference = Math.abs(limit - speed);
                if (difference <= 20) {
                    stat = 'speeding';
                } else if (difference <= 40) {
                    stat = 'excessive speeding';
                } else {
                    stat = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${stat}`);
            }

            break;

        case 'residential':
            limit = 20;
            if (speed <= limit) {
                console.log(`Driving ${speed} km/h in a ${limit} zone`);
            } else {
                let difference = Math.abs(limit - speed);
                if (difference <= 20) {
                    stat = 'speeding';
                } else if (difference <= 40) {
                    stat = 'excessive speeding';
                } else {
                    stat = 'reckless driving';
                }
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${stat}`);
            }

            break;


    }
}
roadRadar(40, 'city');

roadRadar(21, 'residential');

roadRadar(120, 'interstate');

roadRadar(200, 'motorway');