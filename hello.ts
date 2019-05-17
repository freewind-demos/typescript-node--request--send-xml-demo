import request, {Response} from 'request';

request({
  url: "https://httpbin.org/post",
  method: 'POST',
  headers: {
    Accept: 'application/xml, text/xml, */*; q=0.01',
    'Content-Type': 'text/xml',
  },
  body: '<?xml version="1.0" encoding="utf-16"?><hello>request</hello>'
}, (error: any, response: Response, body: any) => {
  console.log(body);
})
