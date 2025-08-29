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
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        textAlign: "center",
        cursor: "pointer",
        width: "40px",
        backgroundColor: "green",
      }}
      onClick={() => {
        console.log(title);
      }}
    >
      {imgUrl && (
        <Image
          src={imgUrl}
          alt={title}
          width={40}
          height={40}
          style={{ objectFit: "contain", margin: "0 auto" }}
        />
      )}
      <h3 style={{ fontSize: "8px" }}>{title}</h3>
    </div>
  );
}
