import { faker } from '@faker-js/faker';

function createRandomCarList(){
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/SI2RI5FNUJGJFLVQAAPGZPX3GQ.jpg',
        miles:1203,
        gearType:'Automatic',
        price:faker.finance.amount({min:35000000, max:600000000})
    };
}

const carList=faker.helpers.multiple(createRandomCarList,{
    count:7
})

export default{ carList }