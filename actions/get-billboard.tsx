const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getAllBillboardImages = async (): Promise<string[]> => {
  const res = await fetch(`${URL}`);

  if (!res.ok) {
    throw new Error("Failed to fetch billboards");
  }

  const data = await res.json();
  
  const allImages: string[] = data.flatMap((billboard: any) =>
    billboard.images.map((img: any) => img.url)
  );

  return allImages;
};

export default getAllBillboardImages;
