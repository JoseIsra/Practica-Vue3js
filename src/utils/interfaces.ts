export interface Itodo {
  id: string,
  code: string,
  userName: string,
  userTask: string,
  area: string,
  done: boolean,
  priority: string,
}

interface NameUrl {
  name: string,
  url: string,
}

export interface ApiResponse {
  id: number,
  name: string,
  status?: string,
  species?: string,
  type?: string,
  gender?: string,
  origin?: NameUrl,
  location?: NameUrl,
  image?: string,
  episode?: string[] | string,
  url: string,
  created: string,
  dimension?: string,
  residents?: string[],
  air_date?: string,
  characters?: string[],
}
