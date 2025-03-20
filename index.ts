type Result<T> = [T | null, Error | null];

export async function go<T>(callback: () => Promise<T>): Promise<[T | null, Error | null]> {
  try {
    const val = await callback();
    return [val, null];
  } catch (err) {
    return [null, err as Error];
  }
}
