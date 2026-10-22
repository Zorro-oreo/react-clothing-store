import products from './products.json';

export function getAllProducts() {
    return products;
}

export function getByCategory(category) {
    return products.filter((product) => product.category === category);
}


export function getById(id) {
    return products.find((product) => product.id === id);
}

export function getByFit(fit) {
    return products.filter((product) => product.fit === fit);
}

export function getByTag(tag) {
    return products.filter((product) => product.tag === tag);
}

export function getByColor(color) {
    return products.filter((product) => product.colors.includes(color));
}

export function getFeatured() {
    return products.filter(
        (product) => product.tag === 'Bestseller' || product.tag === 'Limited'
    );
}

export function getHeroProduct() {
    const startOfYear = new Date(new Date().getFullYear(), 0, 0);
    const diffInMs = new Date() - startOfYear;
    const dayOfYear = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return products[dayOfYear % products.length];
}

export function getLookbookPreview() {
    return getAllProducts().slice(0, 4);
}