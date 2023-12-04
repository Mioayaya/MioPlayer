// 发现音乐

import request from "../request"

// limit 默认30  推荐歌单(不需要登录)
export const getPersonalized = (limit?:number) => {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// limit 默认10 推荐新音乐(不需要登录)
export const getPersonalizedNewSong = (limit?:number) => {
  return request({
    url: '/personalized/newsong',
    params: {
      limit
    }
  })
}

// 获取每日推荐歌单(需要登录)
export const getRecommendResource = () => {
  return request({
    url: '/recommend/resource'
  })
}

// 获取每日推荐歌曲
export const getRecommendSongs = () => {
  return request({
    url: '/recommend/songs'
  })
}

// 每日推荐歌曲 不感兴趣
export const disLikeRecommendSongs = (id:number) => {
  return request({
    url: '/recommend/songs/dislike',
    params: {
      id
    }
  })
}