module.exports ={
  devServer: {
    proxy: {
      '/api': {
          target:  'https://netease-cloud-music-api-liart-eight.vercel.app'
      
        }
        }
}
}