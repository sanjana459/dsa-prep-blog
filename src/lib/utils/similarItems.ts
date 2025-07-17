// similar products
const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let categories: string[] = [];
  let tags: string[] = [];

  // ✅ safely set categories if they exist
  if (currentItem.data.categories && currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // ✅ safely set tags if they exist
  if (currentItem.data.tags && currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by categories
  const filterByCategories = allItems.filter(
    (item: { data: { categories?: string[] } }) =>
      categories.some((category) => item.data.categories?.includes(category))
  );

  // filter by tags
  const filterByTags = allItems.filter(
    (item: { data: { tags?: string[] } }) =>
      tags.some((tag) => item.data.tags?.includes(tag))
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // filter out the current post
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;
