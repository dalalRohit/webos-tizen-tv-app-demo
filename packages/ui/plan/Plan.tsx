// import { Button } from "../Button";
// import { CustomIcon } from "../custom/CustomIcon";

export const Plan = () => {
  const planData = [
    {
      id: 0,
      title: { header: "in india", month: "12 months" },
      price: { actualPrice: " ₹365", offerPrice: "₹299" },
    },
    {
      id: 1,
      title: { header: "outside india", month: "12 months" },
      price: { actualPrice: " $9.99", offerPrice: "$5.99" },
    },
  ];
  const planOffer = {
    planBenefits: [
      { id: 0, title: "Watch All Originals" },
      { id: 1, title: "Watch All Library Movies" },
      { id: 2, title: "Full 1080p HD Quality" },
      { id: 3, title: "Watch On Mobile, Web and TV" },
      { id: 4, title: "Valid till 12 Months" },
    ],
  };
  return (
    <div className="bg-black text-white min-h-screen">
      <div className=" flex justify-between  p-28">
        {/* grid 1 */}

        <div className="space-y-4 ">
          <h2 className="text-4xl font-bold">How To Purchase Planns </h2>
          <p className="text-xl ">
            1. Visit
            <span className="text-[#ff0066] ml-2 mr-2">
              www.planetmarathi.com/tv
            </span>
            from your mobile or computer/laptop.
          </p>
          <p className="text-xl">
            2. Enter your phone number & proceed for payment.
          </p>
          <p className="text-xl">
            3. Login in TV App with your account to watch paid content
          </p>
        </div>
        <div className=" absolute bottom-14 ">
          <button className="border-white px-6 font-bold py-4 border-2 w-40">
            Back
          </button>
          {/* <Button
            startIcon={
              <CustomIcon
                color="white"
                size={20}
                icon="arrow-left-long-solid"
              />
            }
            className="border-white border-2 w-40"
          >
            Back
          </Button> */}
        </div>
        {/* grid 2 */}
        <div
          className="  text-center"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "20px",
          }}
        >
          {planData.map((el) => (
            <div key={el?.id} className=" bg-[#282828] rounded-md">
              <div className="bg-[#444444] uppercase  rounded-t-md py-2">
                {/* header  */}
                <h1 className="text-2xl font-bold  ">{el.title?.header}</h1>
                <h2 className="text-lg font-bold ">{el.title?.month}</h2>
              </div>
              {/* price  */}
              <div className="p-10 py-10 space-y-3  ">
                <h2 className="text-2xl font-bold cross">
                  {el.price?.actualPrice}
                </h2>
                <h1 className="text-4xl font-bold ">{el.price?.offerPrice}</h1>
                <p className="text-[#E5E5E5] capitalize text-xs font-bold">
                  Validity :<span>{el.title?.month}</span>
                </p>
                <div className="border-b-2 border-[#444444]"></div>
                {/* plan denefits */}
                <ul className=" space-y-3 text-[#E5E5E5]">
                  {planOffer.planBenefits.map((el) => (
                    <li key={el.id}>{el.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
