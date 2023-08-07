import { Plan } from "ui";
import Head from "next/head";

const Web = () => {
  return (
    <div className="  ">
      <Head>
        <title>Tizen </title>
      </Head>
      <Plan />
      {/* <div className="grid gap-8">
        <Button
          startIcon={<CustomIcon size={14} icon="play-solid" color="white" />}
          className=" bg-[#ff0066] "
        >
          Read More
        </Button>
        <Button
          endIcon={<CustomIcon size={14} icon="play-solid" color="black" />}
          className=" bg-white text-black"
        >
          Read More
        </Button>
        <Button className=" border-2 border-white ">Read More</Button>
        <Button className=" bg-white text-black ">Read More</Button>
      </div> */}
    </div>
  );
};
export default Web;
