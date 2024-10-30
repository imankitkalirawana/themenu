import Image from 'next/image';

export default function Banner() {
  return (
    <>
      <div>
        <div>
          <div className="font-wondershine flex flex-col items-center text-[150px] uppercase leading-[150px]">
            <span className="flex flex-wrap items-center justify-center gap-4">
              <span>SIMPLE</span>
              <Image
                src={'/low-carb.png'}
                alt="low carb"
                className="mb-8 aspect-square w-[130px] object-contain"
                width={200}
                height={200}
              />
              <span>AND</span>
            </span>
            <span>TASTY RECIPES</span>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
