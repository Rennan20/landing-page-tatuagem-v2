import Image from "next/image";
import { Marcellus, Raleway } from "@next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-raleway",
});

interface ReviewCardProps {
  rating: number;
  comment: string;
  userImage: string;
  userName: string;
  data: string;
}

const ReviewCard = ({
  rating,
  comment,
  userImage,
  userName,
  data,
}: ReviewCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg shadow-black mx-2">
      <div className="rounded-full overflow-hidden w-16 h-16 border-2 border-black ">
        <Image src={userImage} alt="User" width={64} height={64} />
      </div>
      <h2
        className={`font-marcellus ${marcellus.variable} text-shadow text-base text-center`}
      >
        {userName}
      </h2>
      <p className={`font-lato text-gray-500 text-sm text-center`}>{data}</p>
      <div className="flex items-center mt-2">
        {/* Renderize as estrelas com base na pontuação (rating) */}
        {/* Exemplo: */}
        {Array.from({ length: rating }, (_, index) => (
          <svg
            key={index}
            className="w-4 h-4 text-[#B22222]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2.5a.5.5 0 0 1 .425.24l1.937 3.546a.5.5 0 0 0 .449.263l3.912.566a.5.5 0 0 1 .277.853l-2.825 2.75a.5.5 0 0 0-.144.495l.666 3.856a.5.5 0 0 1-.725.527L10 14.342l-3.484 1.837a.5.5 0 0 1-.725-.527l.666-3.856a.5.5 0 0 0-.144-.495l-2.825-2.75a.5.5 0 0 1 .277-.853l3.912-.566a.5.5 0 0 0 .449-.263L9.575 2.74A.5.5 0 0 1 10 2.5zm0 2.074a.5.5 0 0 0-.425.24l-1.188 2.175-2.431.352a.5.5 0 0 0-.277.853l1.825 1.78-.431 2.503a.5.5 0 0 0 .724.527l2.263-1.192 2.263 1.192a.5.5 0 0 0 .724-.527l-.431-2.503 1.825-1.78a.5.5 0 0 0-.277-.853l-2.431-.352-1.188-2.175a.5.5 0 0 0-.425-.24z"
            />
          </svg>
        ))}
      </div>
      <p
        className={`font-raleway ${raleway.variable} text-sm md:text-base text-center mt-2`}
      >
        {comment}
      </p>
    </div>
  );
};

export default ReviewCard;
