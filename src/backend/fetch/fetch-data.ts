export const fetchOptions: RequestInit = {
  next: {
    revalidate: 60
  },
  headers: {
    "secret": process.env.API_SECRET as string
  }
}