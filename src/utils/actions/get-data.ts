export async function getDataHome() {
  try {
    // A URL deve ficar em uma única linha para evitar espaços indesejados
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/693831748880fbd1d8a5d006?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`, { next: { revalidate: 120 } })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json();

  } catch (err) {
    throw new Error("Failed to fetch data" + err)
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`, { next: { revalidate: 120 } })

    if (!res.ok) {
      throw new Error('Failed to fetch menu data')
    }

    return res.json()
  }
  catch (err) {
    throw new Error('Failed to fetch menu data')
  }
}