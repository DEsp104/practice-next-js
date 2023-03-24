// to prevent absolute pathname conflict when app is being deployed with a different site path other than the local host
// Make sure app is run on dev
const dev = process.env.NODE_ENV !== 'production';

// if app is run on dev, then assign the local host path, else assign the pathname of site that's being deployed
export const server = dev ? 'http://localhost:3000' : 'https://examplename.com'