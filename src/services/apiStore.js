const API_URL =
    'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74';

export async function getProduct() {
    try {
        const res = await fetch(`${API_URL}`);

        if (!res.ok) throw Error('Failed getting product');

        const data = await res.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}
