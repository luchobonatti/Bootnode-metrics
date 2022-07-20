import Cookies from 'cookies'
import { IncomingMessage, ServerResponse } from 'http'
import httpProxy from 'http-proxy'

const API_URL = 'https://api.harvestapp.com/v2/' // The actual URL of your API
const proxy = httpProxy.createProxyServer()
// Make sure that we don't parse JSON bodies on this route:
export const config = {
  api: {
    bodyParser: false,
  },
}

proxy.on('proxyReq', function (proxyReq, req, res, options) {
  proxyReq.setHeader('Harvest-Account-Id', '1441396')
  proxyReq.setHeader(
    'Authorization',
    'Bearer 2917092.pt.pwj-cCkdeIHLk_bBJXAG8-i-KABkILLIEedGu8S3TedOOvbnW9WVhuwzkfN0rnwqanSiQYgo1Vuj1i36q0Dwaw',
  )
})

export default (req: IncomingMessage, res: ServerResponse) => {
  return new Promise((resolve, reject) => {
    // removes the api prefix from url
    req.url = req?.url?.replace(/^\/api\/harvest/, '')
    console.log(req.url)
    /**
     * if an error occurs in the proxy, we will reject the promise.
     * it is so important. if you don't reject the promise,
     * you're facing the stalled requests issue.
     */
    proxy.once('error', reject)

    proxy.web(req, res, { target: API_URL, autoRewrite: false, changeOrigin: true })
  })
}
