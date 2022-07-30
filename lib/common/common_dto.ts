export namespace CommonDtos {

  export interface ListResponse<T> {
    object: "list",
    data: T[]
  }
}