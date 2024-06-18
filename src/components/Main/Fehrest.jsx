import coffee from "/images/01.jpg";
import coffee2 from "/images/02.jpg";
import coffee3 from "/images/03.jpg";
function Fehrest() {
  const fehrest = [
    { id: "1", nameFa: "نوشیدنی های گرم", nameEn: "hot", image: coffee },
    { id: "2", nameFa: "نوشیدنی های سرد", nameEn: "cold", image: coffee2 },
    { id: "3", nameFa: "غذا", nameEn: "meal", image: coffee3 },
  ];

  return (
    <div className="flex flex-row mt-10 gap-10">
      {fehrest.map((item) => (
        <div key={item.id} className="text-center">
          <img src={item.image} alt="قهوه" width={100} className=" rounded-xl" />
          <p >{item.nameEn}</p>
          <p>{item.nameFa}</p>
        </div>
      ))}
    </div>
  );
}

export default Fehrest;
