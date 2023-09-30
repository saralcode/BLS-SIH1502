/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["natureitems.s3.ap-south-1.amazonaws.com"]
    },
    experimental:{
        serverActions:true,
        scrollRestoration:true
    }
}

module.exports = nextConfig
