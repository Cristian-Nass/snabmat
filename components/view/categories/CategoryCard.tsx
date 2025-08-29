import Image from "next/image";
export default function CategoryCard({
  title,
  imgUrl = "",
}: {
  title: string;
  imgUrl?: string;
}) {
  return (
    <div
      onClick={() => {
        console.log(title);
      }}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={title}
          width={60}
          height={60}
          // style={{ objectFit: "contain", margin: "0 auto" }}
        />
      )}
      {/* <h3 style={{ fontSize: "8px" }}>{title}</h3> */}
    </div>
  );
}
