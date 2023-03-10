/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental:{
    appDir:true
  },
   images:{
    domains:["cdn.sanity.io","cdn-images-1.medium.com"]
   }
}
