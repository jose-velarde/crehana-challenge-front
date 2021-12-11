export interface Ifilter {
  categoryFilter: string
  subcategoryFilter: string
  levelFilter: string
  priceFilter: string
}

export interface Icourse {
  category_name: string
  course_name: string
  course_score: number
  discount: number
  id: number
  level: string
  price: number
  real_price: number
  subcategory_name: string
  username: string
  users: number
}
export interface Icategory {
  id: number
  category_name: string
}

export interface Isubcategory {
  id: number
  subcategory_name: string
  category: string
}

export interface Ipage {
  current_page: number
  total_pages: number
  next_page: number
  previous_page: number
}
