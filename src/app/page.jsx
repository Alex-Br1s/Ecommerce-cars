import prisma from "@/libs/db";
import CardCars from "@/components/CardCars";
import Navbar from "@/components/Navbar";



export async function getCars(){
    const res = await prisma.car.findMany()
    //console.log(res)
    return res
}

 


export default async function Home() {

  const cars = await getCars()
  //console.log(cars); 
  return (
    <div>
    <Navbar />

    <div className="flex flex-wrap justify-center mt-16">
      {
        cars.map(car => (
          <CardCars key={car.id} car={car} />
          ))
        }
    </div>
  </div>
);
}
