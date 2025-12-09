
export async function getDataHome(){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?slug=home&pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json();

    return {
      object: data.objects && data.objects[0]
    };

  } catch (err) {
    throw new Error("Failed to fetch data: " + err)
  }
}
