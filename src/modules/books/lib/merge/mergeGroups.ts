import { type TempMap } from '../../interfaces/temp.map.type';
import { addBookToGroup } from '../../utils/addBookToGroup';

export const mergeGroups = (merges: [string, string][], tempMap: TempMap) => {
  for (const [srcKey, dstKey] of merges) {
    const src = tempMap[srcKey]; // Get the source group
    const dst = tempMap[dstKey]; // Get the destination group

    if (!src || !dst) {
      console.warn(
        `Merge operation skipped: source or destination group not found: ${srcKey} -> ${dstKey}`,
      );
      continue;
    }

    // Consolidate formats and title variants with duplicate prevention
    for (const formatType of [1, 2, 3] as const) {
      // Iterate over the format types
      for (const book of src.formats[formatType]) {
        // Check if this book already exists in the destination group
        addBookToGroup(dst, book, formatType);
      }
    }

    // Consolidate title variants with duplicate prevention
    // Merge all variants from source into destination
    for (const [variant, count] of src.variants.entries()) {
      // Add the count of the source variant to the destination variant
      dst.variants.set(variant, (dst.variants.get(variant) ?? 0) + count);
    }

    // Reorder destination variants by count (descending) so variants with more books come first
    const sortedDstVariants = Array.from(dst.variants.entries()).sort(
      (a, b) => b[1] - a[1],
    );
    dst.variants.clear();
    for (const [variant, count] of sortedDstVariants) {
      dst.variants.set(variant, count);
    }
    delete tempMap[srcKey]; // Delete the source group from the temporary map
  }
};
