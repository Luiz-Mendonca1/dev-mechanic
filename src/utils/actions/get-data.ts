// src/utils/actions/get-data.ts

export async function getDataHome(){
  try {
    // 1. Mudamos a URL para buscar pelo parâmetro "?slug=home"
    // Mantivemos os mesmos "props" e "depth" que você já usava
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?slug=home&pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,type`)

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json();

    // 2. ADAPTAÇÃO IMPORTANTE:
    // A busca por slug retorna uma LISTA (data.objects).
    // Seu site espera um único "object". 
    // Então pegamos o primeiro item (data.objects[0]) e retornamos no formato antigo.
    
    return {
      object: data.objects && data.objects[0]
    };

  } catch (err) {
    throw new Error("Failed to fetch data: " + err)
  }
}