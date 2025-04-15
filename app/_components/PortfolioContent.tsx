import Image from "next/image";
interface PortfolioContentPropsType {
  data: {
    type: string[];
    img: string;
  }[];
  isAllData: boolean;
}

const PortfolioContent = ({ data, isAllData }: PortfolioContentPropsType) => {
  return (
    <div className="flex items-start custome-md:justify-between gap-14 xl:gap-24 px-4 custome-md:px-16">
      <div className="basis-full sm:basis-[70%]  flex flex-wrap sm:flex-nowrap flex-row items-start gap-2">
        <div className="block basis-[65%] custome-md:basis-[55%]">
          <div className="relative w-full h-[100px] sm:h-40">
            <Image
              alt="img-1"
              src={data.at(0)?.img as string}
              fill
              className="object-center rounded-md"
            />
          </div>
          {isAllData && (
            <div className="relative w-[75%] h-40 mt-2">
              <Image
                alt="img-4"
                src={data.at(data.length - 1)?.img as string}
                fill
                className="object-center rounded-md"
              />
            </div>
          )}
        </div>
        <div className="block basis-[48.8%] sm:basis-[35%] custome-md:basis-[45%]">
          <div className="relative w-full h-[15rem] sm:h-[20rem] custome-md:h-[35rem]">
            <Image
              alt="img-2"
              src={data.at(1)?.img as string}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="block custome-md:hidden mt-2 relative w-full h-40 xl:h-60">
            <Image
              alt="img-3"
              src={
                isAllData
                  ? (data.at(data.length - 2)?.img as string)
                  : (data.at(data.length - 1)?.img as string)
              }
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="hidden custome-md:block sm:basis-[30%]">
        <div className="relative w-full h-36 xl:h-60">
          <Image
            alt="img-3"
            src={data.at(data.length - 1)?.img as string}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
