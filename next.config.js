module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/whattherocket',
        destination: 'https://apps.apple.com/us/app/whattherocket/id1601871237',
        permanent: true
      },
    ]
  }
}
