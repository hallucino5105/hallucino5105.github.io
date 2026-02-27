import type z from "zod";

/*
  objectとz.objectの整合性を取る
  https://zenn.dev/ynakamura/articles/65d58863563fbc#%E6%97%A2%E5%AD%98%E3%81%AE%E5%9E%8B%E3%81%A8%E3%81%AE%E6%95%B4%E5%90%88%E6%80%A7%E3%82%92%E3%81%A9%E3%81%86%E5%8F%96%E3%82%8B%E3%81%8B%EF%BC%9F

  type User {
    name: string
    zipCode: string // <- new
  }

  // zipCodeがなのでTSエラー
  const UserZodSchema = schemaForType<User>()(
    z.object({
      name: z.string()
    })
  )
*/
export function schemaForType<T>() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <S extends z.ZodType<T, any, any>>(arg: S) => {
    return arg;
  };
}

