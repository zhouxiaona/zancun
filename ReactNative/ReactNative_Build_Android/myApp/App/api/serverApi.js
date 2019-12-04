import apiUtils from './apiUtils'
/**
 * 上映的电影
 */
export const Intheaters = params => {
  return apiUtils.commonGet('/v2/movie/in_theaters',params)
}

/**
 * 电影详情
 */
export const SubjectDetail = params => {
  return apiUtils.jsonGet('/v2/movie/subject/',params)
}

/**
 * 搜索电影
 */
export const search = params => {
  return apiUtils.commonGet('/v2/movie/search',params)
}
